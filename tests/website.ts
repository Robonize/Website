import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { Website } from "../target/types/website";

describe("robonize", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.Robonize as Program<Website>;

  it("Is initialized!", async () => {
    // Add your test here.
    const tx = await program.methods.initialize().rpc();
    console.log("Your transaction signature", tx);
  });
});
