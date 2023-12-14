import React from "react";
import { RxCrossCircled } from "react-icons/rx";

const PopUp = ({
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
    return null;
  }

  return (
    <div className="fixed z-10 inset-0 backdrop-brightness-[30%]">
      <div
        id="modal"
        className="h-screen flex items-center justify-center left-0 right-0"
      >
        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <div className="fixed w-full">
            <div className="flex relative justify-between items-center">
              <h2 className="text-2xl font-bold">{title}</h2>
              <RxCrossCircled
                className="cursor-pointer"
                size={30}
                onClick={() => onClose()}
              />
            </div>
          </div>
          <div className="mt-10">
            {children}
            </div>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
