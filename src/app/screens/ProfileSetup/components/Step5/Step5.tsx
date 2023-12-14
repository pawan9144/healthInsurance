import React from "react";
import Indicators from "../../shared/Indicators";
import Details from "./components/Details";
import ContinueBtn from "../../shared/ContinueBtn";
import BackBtn from "../../shared/backBtn";

const Step5 = () => {
  return (
    <div className="mb-10">
      <BackBtn/>
      <Indicators step={5} />
      <h5 className="text-[36px] mobile:text-[22px] mt-10 mb-4 text-secondary font-[600]">{`Health Verification`}</h5>
      <div className="w-[131px] mt-3 h-[5px] bg-[#36B37E]"></div>
      <p className="text-[32px] mobile:text-[20px] mt-5">
        To help us find the right plan
      </p>
      <p className="text-[32px] mobile:text-[20px] mt-5">
        Do you have an existing illness or medical history?
      </p>
      <p className="text-[#2E2E2E99] text-opacity-60">
        This helps us find plans that cover your condition and avoid claim
        rejection.
      </p>

      <Details />
      <ContinueBtn />
    </div>
  );
};

export default Step5;
