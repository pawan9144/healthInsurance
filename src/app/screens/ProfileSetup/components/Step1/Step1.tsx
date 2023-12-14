import React from "react";
import Indicators from "../../shared/Indicators";
import { useProfileSetupStateContext } from "../../context/ProfileSetupStateContext";
import DesktopStep1 from "./components/DesktopStep1";
import MobileStep1 from "./components/MobileStep1";
import ContinueBtn from "../../shared/ContinueBtn";

const Step1 = ({ data }: { data: any }) => {
  const btns = [
    {
      name: "Individual Plan",
    },
    {
      name: "Family Plan",
    },
    {
      name: "Senior Citizen",
    },
    {
      name: "Critical Illness",
    },
    {
      name: "Top Up",
    },
  ];
  const { profileSetupStates, setProfileSetupStates } =
    useProfileSetupStateContext();

  const onChangeHandler = ({ relationId }: { relationId: number }) => {
    let array = [];
    array.push(relationId);
    const newArray = [new Set(array)];

    setProfileSetupStates((prevStates: any) => ({
      ...prevStates,
    }));
  };



  return (
    <div>
      <div className="flex gap-5 mobile:grid mobile:grid-cols-2 mb-10 flex-wrap mobile:justify-start mobile:gap-5">
        {btns?.map((item, i) => (
          <div key={i}>
            {profileSetupStates?.step1States?.selectedBtn === i ? (
              <button
                onClick={() =>
                  setProfileSetupStates((prevStates: any) => ({
                    ...prevStates,
                    step1States: {
                      ...prevStates.step1States,
                      selectedBtn: i,
                    },
                  }))
                }
                className="bg-secondary w-[240px] mobile:w-full border-2 border-secondary text-white px-5 py-2 rounded-[45px]"
              >
                {item?.name}
              </button>
            ) : (
              <button
                onClick={() =>
                  setProfileSetupStates((prevStates: any) => ({
                    ...prevStates,
                    step1States: {
                      ...prevStates.step1States,
                      selectedBtn: i,
                    },
                  }))
                }
                className="bg-white w-[240px] mobile:w-full border-2 border-secondary text-secondary px-5 py-2 rounded-[45px]"
              >
                {item?.name}
              </button>
            )}
          </div>
        ))}
      </div>

      <Indicators step={1} />

      <div className="text-center mt-5">
        <h5 className="text-[24px] mobile:text-[17px] font-[600]">
          {data?.subHeading}
        </h5>
        <div className="w-[131px] mt-3 mx-auto h-[5px] bg-[#36B37E]" />
        <h2 className="text-[40px] mobile:text-[22px] mt-4 mb-4 text-secondary font-[600]">
          {data?.heading}
        </h2>
      </div>

      <div className="flex justify-center">
        <div className="w-[867px]">
          <div className="flex justify-center mt-5">
            {/* mobile */}
            <MobileStep1
              data={data}
              onChangeHandler={onChangeHandler}
            />
            {/* desktop */}
            <DesktopStep1
              data={data}
              onChangeHandler={onChangeHandler}
            />
          </div>
          <ContinueBtn />
        </div>
      </div>
      <div className="text-center my-10">
        <p>
          {`By clicking on Continue, you agree to our`}{" "}
          <span className="text-[#0091E4]">Privacy Policy</span>
          {`, Terms of Use`} and
          <span className="text-[#0091E4]"> Disclaimer</span>
        </p>
      </div>
    </div>
  );
};

export default Step1;
