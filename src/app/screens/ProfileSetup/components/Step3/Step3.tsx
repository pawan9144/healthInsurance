import * as React from "react";
import Indicators from "../../shared/Indicators";
import ContinueBtn from "../../shared/ContinueBtn";
import SelectDob from "./components/SelectDob";
import BackBtn from "../../shared/backBtn";

const Step3 = () => {
  return (
    <div>
     <BackBtn/>
      <Indicators step={3} />
      <h5 className="text-[36px] mobile:text-[22px] mt-10 mb-4 text-secondary font-[600]">{`What's the age of member?`}</h5>
      <div className="w-[131px] mt-3 h-[5px] bg-[#36B37E]"></div>

      <p className="text-[32px] mobile:text-[20px] mt-5">
        Select date of birth
      </p>

      <SelectDob />
      <ContinueBtn />
    </div>
  );
};

export default Step3;
