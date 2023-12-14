import React, { useState } from "react";
import SumInsured from "./components/SumInsured";
import EnterValue from "./components/EnterValue";
import TopUp from "./components/TopUp";
import { useProfileSetupStateContext } from "../../context/ProfileSetupStateContext";
import Indicators from "../../shared/Indicators";
import ContinueBtn from "../../shared/ContinueBtn";
import BackBtn from "../../shared/backBtn";

const Step2 = () => {

  const data = [
    {
      insurer: "Self",
    },
    {
      insurer: "Spouse",
    },
    {
      insurer: "Son",
    },
    {
      insurer: "Daughter",
    },
  ];

  const { profileSetupStates } =
    useProfileSetupStateContext();

  //sum insured states
  const [showDropdown, setShowDropdown] = useState(false);
  const [currentSelection, setCurrentSelection] = useState(0);

  return (
    <div>
<BackBtn/>
      <Indicators step={2} />
      <div className="my-10">
        <SumInsured
          showDropdown={showDropdown}
          setShowDropdown={setShowDropdown}
          currentSelection={currentSelection}
          setCurrentSelection={setCurrentSelection}
          data={data}
        />
      </div>
      <div className="flex mobile:flex-col gap-10">
        <div className="w-[300px] mobile:w-full">
          <EnterValue currentSelection={currentSelection} data={data} />
        </div>
        <div className="w-[290px] mobile:w-full">
          {profileSetupStates?.step1States?.selectedBtn === 4 && (
            <TopUp currentSelection={currentSelection} data={data} />
          )}
        </div>
      </div>
      <div className="text-left my-10">
        <p>
          {`By clicking on Continue, you agree to our`}{" "}
          <span className="text-[#0091E4]">Privacy Policy</span>
          {`, Terms of Use`} and
          <span className="text-[#0091E4]"> Disclaimer</span>
        </p>
      </div>
      <ContinueBtn />
    </div>
  );
};

export default Step2;
