import React from "react";

const Indicators = ({ step }: { step: number }) => {
  const steps = [1, 2, 3];
  return (
    <div className="flex items-center justify-center w-full">
      <div className="flex relative justify-between items-center w-[80%] mobile:w-full font-[700] text-[19.84px]">
        <div className="w-full z-[-1] absolute h-[2px] bg-black bg-opacity-75" />
        {steps?.map((item, i) => {
          if (i < step) {
            return (
              <div key={i}>
                <div>
                  {i === 0 && (
                    <span className="text-secondary absolute mt-[-25px] ms-[-8px] mobile:ms-[0] text-sm">
                      Proposer
                    </span>
                  )}
                  {i === 1 && (
                    <span className="text-secondary absolute mt-[-25px] ms-[-8px] text-sm">
                      Medical
                    </span>
                  )}
                  {i === 2 && (
                    <span className="text-secondary absolute mt-[-25px] ms-[-8px] text-sm">
                      Nominee
                    </span>
                  )}
                </div>
                <div className="flex items-center">
                  <div
                    className="flex w-[44px] h-[44px] mobile:w-[34px] mobile:h-[34px] mobile:text-[17px] text-white justify-center items-center rounded-full bg-secondary"
                    key={i}
                  >
                    {item}
                  </div>
                </div>
              </div>
            );
          } else {
            return (
              <div key={i}>
                <div>
                  {i === 0 && (
                    <span className="text-secondary absolute mt-[-25px] ms-[-8px] text-sm">
                      Proposer
                    </span>
                  )}
                  {i === 1 && (
                    <span className="text-secondary absolute mt-[-25px] ms-[-8px] text-sm">
                      Medical
                    </span>
                  )}
                  {i === 2 && (
                    <span className="text-secondary absolute mt-[-25px] ms-[-8px] mobile:ms-[-30px] text-sm">
                      Nominee
                    </span>
                  )}
                </div>
                <div key={i} className="flex items-center">
                  <span className="border-[2px] bg-white border-black border-opacity-75 flex w-[44px] h-[44px] mobile:w-[34px] mobile:h-[34px] mobile:text-[17px] text-black justify-center items-center rounded-full">
                    {item}
                  </span>
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Indicators;
