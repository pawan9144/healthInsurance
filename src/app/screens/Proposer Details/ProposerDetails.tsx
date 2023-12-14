import React, { useState } from "react";
import Step1 from "./components/Step1/Step1";
import Container from "@/app/container/Container";
import Step2 from "./components/Step2/Step2";
import Step3 from "./components/Step3/Step3";
import { useProposerDetailsStateContext } from "./context/ProposerDetailsStateContext";
import { GrNotes } from "react-icons/gr";
import Summary from "./components/Summary";

const ProfileSetup = () => {
  const { proposerDetailsStates } = useProposerDetailsStateContext();

  const [showSummary, setShowSummary] = useState(false);

  const currentStep = proposerDetailsStates?.stepsStates?.currentStep;

  return (
    <div className="my-10">
      <div
        className={`transform overflow-y-auto fixed w-[75%] z-20 left-0 top-0 ease-in-out shadow-md transition duration-300 bg-white ${
          showSummary ? "translate-x-0" : "translate-x-[-100%]"
        }`}
      >
        <Summary />
      </div>

      <div className="desktop:hidden">
        <div className="bottom-5 z-20 right-5 fixed">
          <div
            onClick={() => setShowSummary(!showSummary)}
            className="rounded-full p-2 bg-primary border-2 border-white drop-shadow-md flex items-center justify-center w-[45px] h-[45px]"
          >
            <GrNotes color="white" size={25} />
          </div>
        </div>
      </div>
      <Container>
        {currentStep === 1 && <Step1 />}
        {currentStep === 2 && <Step2 />}
        {currentStep === 3 && <Step3 />}
      </Container>
    </div>
  );
};

export default ProfileSetup;
