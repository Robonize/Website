import { useWallet } from "@solana/wallet-adapter-react";
import { WalletName } from '@solana/wallet-adapter-base';
import React, { useCallback } from "react";
import { cn } from "../utils/cn";
import Image from "next/image";

import { useSolana } from "../context/SolanaContext";
import Modal from "./Modal";

const ModalConnect: React.FC = () => {
  const { openConnect, setOpenConnect } = useSolana();
  const { wallets, select } = useWallet();



  const handleConnectPhantom = useCallback(
  (walletName: string) => {
    const WalletName = walletName as WalletName;
    select(WalletName);
    setOpenConnect(false);
  },
  [setOpenConnect, select]
);


  return (
    <Modal open={openConnect===true} >
      <div className="relative w-[380px] max-w-[380px] bg-[#259776] rounded-xl px-5 pt-5">
        <div className="w-full overflow-y-auto min-h-[300px] max-h-[700px] relative pb-6 pt-1">
          <span className="text-white font-medium text-xl text-center font-dm mb-6 flex justify-center items-center">
            Select your wallet
          </span>

          <div>
            {wallets.map((wallet) => (
              <div
                onClick={() => handleConnectPhantom(wallet.adapter.name)}
                key={wallet.adapter.name}
                className="flex items-center h-[40px] cursor-pointer px-4 text-white justify-between hover:bg-[#292929] hover:text-fire-orange-400 rounded-md"
              >
                <span className="text-base font-medium">
                  {wallet.adapter.name}
                </span>
                <Image
                  className={cn("w-[26px] h-[26px]")}
                  src={wallet.adapter.icon}
                  alt={wallet.adapter.name}
                  width={24}
                  height={24}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ModalConnect;