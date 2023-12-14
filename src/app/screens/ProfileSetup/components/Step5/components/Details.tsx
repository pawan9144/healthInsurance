import React from "react";

const Details = () => {
  return (
    <div className="flex flex-col gap-5 items-start mt-10">
      <div className="flex w-[600px] mobile:w-full items-center p-4 rounded-[6px] gap-5 border-2 border-[#2E2E2EC2] border-opacity-75">
        <div>
          <input className="w-[20px] h-[20px]" type="checkbox" />
        </div>
        <div>
          <h6>Existing Illness</h6>
          <p className="font-[200]">
            {`Blood pressure, Diabetes, Heart conditions, Asthma, Cancer etc.`}
          </p>
        </div>
      </div>
      <div className="flex w-[600px] mobile:w-full items-center p-4 rounded-[6px] gap-5 border-2 border-[#2E2E2EC2] border-opacity-75">
        <div>
          <input className="w-[20px] h-[20px]" type="checkbox" />
        </div>
        <div>
          <h6>Surgical Procedure</h6>
          <p className="font-[200]">
            {`Apenddix, Gall bledder, C-section etc.`}
          </p>
        </div>
      </div>
      <div className="flex w-[600px] mobile:w-full items-center p-4 rounded-[6px] gap-5 border-2 border-[#2E2E2EC2] border-opacity-75">
        <div>
          <input className="w-[20px] h-[20px] mobile:mt-2" type="checkbox" />
        </div>
        <div>
          <h6>None of these</h6>
        </div>
      </div>
    </div>
  );
};

export default Details;
