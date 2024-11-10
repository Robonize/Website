import React, { ReactNode, Dispatch, SetStateAction } from "react";
import { cn } from "../utils/cn";

interface ModalProps {
  children: ReactNode;
  setOpenModal?: Dispatch<SetStateAction<boolean>>;
  isBlur?: boolean;
  open?: boolean;
}

const Modal: React.FC<ModalProps> = ({
  children,
  setOpenModal,
  open,
}) => {
  if (!open) return null;

  return (
    <div className="w-full h-full bg-[#000000B2] fixed inset-0 flex justify-center items-center z-50">
      <div
        onClick={() => setOpenModal && setOpenModal(false)}
        className={cn("w-full h-hull absolute inset-0")}
      />
      <div className="relative">{children}</div>
    </div>
  );
};

export default Modal;