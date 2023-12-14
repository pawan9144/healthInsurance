import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const SumInsured = ({
  data,
  showDropdown,
  setShowDropdown,
  currentSelection,
  setCurrentSelection,
}: {
  data: any;
  showDropdown: any;
  setShowDropdown: any;
  currentSelection: any;
  setCurrentSelection: any;
}) => {
  const [selectedBtn, setSelectedBtn] = useState<number>();

  return (
    <div>
      <div className="flex flex-col gap-3">
        <span
          onClick={() => setShowDropdown(!showDropdown)}
          className="flex cursor-pointer items-center gap-3"
        >
          <h3 className="text-2xl text-secondary font-[600]">Sum Insured</h3>
          <IoIosArrowDown size={23} />
          <div className="text-xl font-[600]">
            {currentSelection === 0 ? (
              <span>Individual</span>
            ) : (
              <span>Family</span>
            )}
          </div>
        </span>

        {showDropdown && (
          <div className="shadow-md font-[600] flex flex-col p-2 absolute bg-white w-[200px] mt-[60px]">
            <span
              onClick={() => {
                setShowDropdown(false);
                setCurrentSelection(0);
              }}
              className="hover:bg-secondary cursor-pointer py-2 px-2 hover:text-white"
            >
              Individual
            </span>
            <span
              onClick={() => {
                setShowDropdown(false);
                setCurrentSelection(1);
              }}
              className="hover:bg-secondary cursor-pointer py-2 px-2 hover:text-white"
            >
              Family
            </span>
          </div>
        )}
        <div className="h-[4px] bg-tertiary w-[100px]" />
      </div>
      {currentSelection === 0 && (
        <div className="flex mt-10 items-center mobile:grid mobile:grid-cols-2 gap-10 mobile:gap-5">
          {data?.map((item: any, i: number) => (
            <button
              onClick={() => setSelectedBtn(i)}
              className={`border-2 ${
                selectedBtn === i && "bg-secondary text-white"
              } text-left mobile:w-full text-secondary w-full py-2 px-3 border-secondary rounded-[6px]`}
              key={i}
            >
              {item.insurer}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default SumInsured;
