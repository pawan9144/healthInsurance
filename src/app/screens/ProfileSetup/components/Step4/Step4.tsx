import * as React from "react";
import Indicators from "../../shared/Indicators";
import ContinueBtn from "../../shared/ContinueBtn";
import SelectCity from "./components/SelectCity";
import cities from "./data/cities.json";
import BackBtn from "../../shared/backBtn";

const Step4 = () => {
  return (
    <div>
      <BackBtn/>
      <Indicators step={4} />
      <h5 className="text-[36px] mobile:text-[22px] mt-10 mb-4 text-secondary font-[600]">{`Where do you live?`}</h5>
      <div className="w-[131px] mt-3 h-[5px] bg-[#36B37E]"></div>
      <p className="text-[32px] mobile:text-[20px] mt-5">Select a city</p>

      <SelectCity data={cities} />
      <ContinueBtn />
    </div>
  );
};

export default Step4;
