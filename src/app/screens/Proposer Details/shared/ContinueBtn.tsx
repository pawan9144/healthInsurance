import React from "react";
import { useProposerDetailsStateContext } from "../context/ProposerDetailsStateContext";

const ContinueBtn = () => {
  const { setProposerDetailsStates } = useProposerDetailsStateContext();

  const continueClickHandler = () => {
    setProposerDetailsStates((prevStates: any) => ({
      ...prevStates,
      stepsStates: {
        currentStep: prevStates.stepsStates.currentStep + 1,
      },
    }));
  };

  return (
    <div>
      <button
        onClick={() => continueClickHandler()}
        className="bg-primary w-full mt-10 font-[700] text-white py-3 rounded-[10px]"
      >
        Proceed to Medical Questions
      </button>
    </div>
  );
};

export default ContinueBtn;
