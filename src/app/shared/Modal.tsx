import React from "react";
import { RxCrossCircled } from "react-icons/rx";

const Modal = ({
  isOpen,
  children,
  onClose,
  title,
}: {
  isOpen: boolean;
  children: React.ReactNode;
  onClose: any;
  title: string;
}) => {
  if (!isOpen) {
    return;
  }

  return (
    <div className="fixed z-10 overflow-y-auto inset-0 backdrop-brightness-[30%]">
      <div className="my-[6%]  bottom-0 flex items-center justify-center left-0 right-0">
        <div className="bg-white mobile:w-full rounded-2xl shadow-lg">
          <div className="bg-[#2E2E2E] bg-opacity-25 relative flex items-center">
            <h2 className="text-2xl mobile:text-xl py-3 mx-auto px-6">
              {title}
            </h2>
            <RxCrossCircled
              onClick={onClose}
              className="cursor-pointer right-5 absolute z-10"
              size={28}
            />
          </div>
          <div className="mt-4 px-5 overflow-x-auto w-full">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
