use anchor_lang::prelude::*;
use anchor_spl::token::{self, Mint, Token, TokenAccount, Transfer};

declare_id!("");

#[program]
pub mod token_machine {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>, price_per_token: u64) -> Result<()> {
        let config = &mut ctx.accounts.config;
        config.price_per_token = price_per_token;
        config.owner = *ctx.accounts.owner.key;
        Ok(())
    }

    pub fn buy_token(ctx: Context<BuyToken>, amount: u64) -> Result<()> {
        let config = &ctx.accounts.config;

        // Calcular o custo total
        let total_cost = config.price_per_token.checked_mul(amount).unwrap();
        
        // Transferir SOL do comprador para o proprietário do contrato
        **ctx.accounts.buyer.try_borrow_mut_lamports()? -= total_cost;
        **ctx.accounts.owner.try_borrow_mut_lamports()? += total_cost;

        // Transferir tokens para o comprador
        let cpi_accounts = Transfer {
            from: ctx.accounts.seller_token_account.to_account_info(),
            to: ctx.accounts.buyer_token_account.to_account_info(),
            authority: ctx.accounts.owner.to_account_info(),
        };
        let cpi_program = ctx.accounts.token_program.to_account_info();
        let cpi_ctx = CpiContext::new(cpi_program, cpi_accounts);
        token::transfer(cpi_ctx, amount)?;

        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize<'info> {
    #[account(init, payer = owner, space = 8 + 32 + 8)]
    pub config: Account<'info, Config>,
    #[account(mut)]
    pub owner: Signer<'info>,
    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
pub struct BuyToken<'info> {
    #[account(mut)]
    pub buyer: Signer<'info>,
    #[account(mut)]
    pub config: Account<'info, Config>,
    #[account(mut)]
    pub owner: AccountInfo<'info>,
    #[account(mut)]
    pub seller_token_account: Account<'info, TokenAccount>,
    #[account(mut)]
    pub buyer_token_account: Account<'info, TokenAccount>,
    pub token_program: Program<'info, Token>,
}

#[account]
pub struct Config {
    pub price_per_token: u64,
    pub owner: Pubkey,
}
