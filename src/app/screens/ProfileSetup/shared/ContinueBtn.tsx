import React, { useContext } from "react";
import { StoreContext } from "@/context";
import { PROFILE_SETUP_STEP } from "@/constants/reducerAction.contant";

const ContinueBtn = () => {
  const { profileSetupStep,dispatch } = useContext(StoreContext);

  const continueClickHandler = () => {
    dispatch({
      type: PROFILE_SETUP_STEP,
      payload: { currentStep: profileSetupStep?.currentStep+1 },
    })
  };

  return (
    <div>
      <button
        onClick={() => continueClickHandler()}
        className="bg-primary w-full mt-10 font-[700] text-white py-4 rounded-[10px]"
      >
        Continue
      </button>

      <div className="mt-5">
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

export default ContinueBtn;
