import React, { useState } from "react";
import Indicators from "../../shared/Indicators";
import { medicalConditionData, proposerData } from "../../data/data";
import ContinueBtn from "../../shared/ContinueBtn";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";

const Step2 = () => {
  const [toggleSelected, setToggleSelected] = useState(false);
  const [toggledIndex, setToggledIndex] = useState<any>(null);
  const [showDropdown, setShowDropdown] = useState(false);

  const qualificationData = ["X Pass", "XII Pass", "Graduate", "Post Graduate"];

  return (
    <div>
      <div className="mb-10">
        <AiOutlineArrowLeft
          className="cursor-pointer"
          color="#0A225F"
          size={24}
        />
      </div>
      <div className="py-5">
        <Indicators step={2} />
      </div>
      <div className="flex mobile:grid mobile:grid-cols-2 gap-10 mt-10 mobile:gap-5">
        {proposerData.tabs[0]?.btns?.map((item, i) => (
          <button
            className="w-full text-left ps-2 rounded-[8px] py-2 border-2 border-secondary"
            key={i}
          >
            {item}
          </button>
        ))}
      </div>
      <div>
        <h1 className="text-2xl text-secondary font-[600] mt-10">
          {medicalConditionData?.heading}
        </h1>
        <p className="text-quaternary">{medicalConditionData?.desc}</p>
        <div className="list-decimal flex flex-col gap-10 mt-10">
          {medicalConditionData?.conditions?.map((item, i) => (
            <div className="text-quaternary" key={i}>
              <div className="flex-wrap mobile:justify-center flex items-center justify-between">
                <div className="w-[600px]">
                  <span>{i + 1}.</span> {item}
                </div>

                <div className="flex gap-2 mobile:mt-5">
                  <button
                    onClick={() => {
                      setToggleSelected(true);
                      setToggledIndex(i);
                    }}
                    className={`${
                      toggleSelected &&
                      toggledIndex === i &&
                      "bg-secondary text-white"
                    } px-3 py-1 rounded-md border-2 border-secondary`}
                  >
                    Yes
                  </button>
                  <button
                    onClick={() => {
                      setToggleSelected(false);
                      setToggledIndex(i);
                    }}
                    className={`${
                      !toggleSelected &&
                      toggledIndex === i &&
                      "bg-secondary text-white"
                    } px-3 py-1 rounded-md border-2 border-secondary`}
                  >
                    No
                  </button>
                </div>
              </div>
              <div>
                {i === medicalConditionData?.conditions?.length - 1 && (
                  <div className="mt-10 justify-between flex mobile:flex-col gap-5">
                    <div className="flex items-center gap-5">
                      <div>
                        <span>{i + 2}.</span>&nbsp;<span>Qualification</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-5">
                      <div className="relative w-full">
                        <button
                          onClick={() => setShowDropdown(!showDropdown)}
                          className="border-[2px] flex justify-end w-[200px] mobile:w-full gap-20 items-center border-secondary rounded-[4px] py-2 px-4"
                        >
                          <IoIosArrowDown />
                        </button>
                        {showDropdown && (
                          <div className="absolute border-2 border-secondary border-t-0 rounded-b-md bg-white flex flex-col gap-2 px-4 py-2 w-full">
                            {qualificationData?.map((item, i) => (
                              <div key={i} className="flex items-center gap-1">
                                <input type="checkbox" />
                                <span>{item}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <ContinueBtn />
    </div>
  );
};

export default Step2;
