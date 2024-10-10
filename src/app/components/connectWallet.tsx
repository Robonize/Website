import React, {
    useCallback,
    useEffect,
    useMemo,
    useRef,
    useState,
  } from "react";
  import { truncateWallet } from "../utils/truncate";
  import Image from "next/image";
  import { useWallet } from "@solana/wallet-adapter-react";
  import { useSolana } from "../context/SolanaContext";
  import { cn } from "../utils/cn";
  import Button from "./Button";
  
  
  interface Props {
    className?: string;
  }
  
  const ConnectWallet: React.FC<Props> = ({ className }) => {
    const filterRef = useRef<HTMLDivElement>(null);
    const { setOpenConnect } = useSolana();
    const [openDropdown, setOpenDropdown] = useState(false);
    const wallet = useWallet();
  
    const handleClickConnect = useCallback(() => {
      if (wallet.connected) {
        setOpenDropdown(!openDropdown);
      } else {
        setOpenConnect(true);
      }
    }, [openDropdown, setOpenConnect, wallet.connected]);
  
    const changeWallet = useCallback(() => {
      wallet.disconnect();
      setOpenDropdown(false);
      setOpenConnect(true);
    }, [wallet, setOpenConnect]);
  
    const disconnectWallet = useCallback(() => {
      wallet.disconnect();
      setOpenDropdown(false);
    }, [wallet]);
  
    const copyAddress = useCallback(() => {
      setOpenDropdown(false);
    }, [wallet]);
  
    const listDropdown = useMemo(() => {
      return [
        {
          title: "Copy address",
          icon: <span>Copy</span>,
          action: copyAddress,
        },
        {
          title: "Change wallet",
          icon: <span>Change wallet</span>,
          action: changeWallet,
        },
        {
          title: "Disconnect",
          icon: <span>Disconnect</span>,
          action: disconnectWallet,
        },
      ];
    }, [changeWallet, copyAddress, disconnectWallet]);
  
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (filterRef.current && !filterRef.current.contains(event.target  as Node)) {
          setOpenDropdown(false);
        }
      };
      document.addEventListener("click", handleClickOutside);
      return () => {
        document.removeEventListener("click", handleClickOutside);
      };
    }, [filterRef]);
  
    return (
      <div ref={filterRef} className={cn(className, "")}>
        <div
          onClick={handleClickConnect}
          className={cn(
            "relative lg:flex items-center w-full  cursor-pointer p-[1px] rounded-xl"
          )}
        >
          
            <div className="relative z-10 flex items-center justify-center uppercase font-bold text-white">
              <Button className="rounded-full m-4 p-4 w-40">
                {wallet.connected ? (
                  <>
                   
                      <Image
                        className="mr-2"
                        width={21}
                        height={21}
                        src={wallet.wallet?.adapter.icon || ""}
                        alt="wallet_icon"
                      />
                      {truncateWallet(wallet.publicKey?.toBase58(), 10)}  
                  </>
                ) : (
                  <>
                    <p>Connect wallet</p>
                  </>
                )}
                </Button>
            </div>
          </div>
        {openDropdown &&
        <div className={cn("rounded-xl p-2 m-1 bg-gradient-to-r from-purple-800 to-sky-600", openDropdown && "wallet-adapter-dropdown-list-active")}>
          <div className="flex items-center mb-2 px-2.5 pointer-events-none">
            <Image
              className="mr-2"
              width={21}
              height={21}
              src={wallet.wallet?.adapter.icon || ""}
              alt="wallet_icon"
            />
            <span className="text-white text-sm font-medium flex pt-0.5">
              {wallet.wallet?.adapter.name}
            </span>
          </div>
          {listDropdown.map((item, index) => (
            <div
              key={index}
              onClick={item.action}
              className="wallet-adapter-dropdown-list-item cursor-pointer	font-bold text-white hover:bg-sky-600 hover:rounded-lg hover:p-1"
            >
              {item.title}
            </div>
          ))}
        </div>
        }
      </div>
    );
  };
  
  export default ConnectWallet;