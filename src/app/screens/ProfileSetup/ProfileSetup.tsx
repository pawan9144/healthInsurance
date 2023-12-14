import React, { useContext, useEffect, useState } from "react";

import Container from "@/app/container/Container";

import Step2 from "./components/Step2/Step2";
import Step1 from "./components/Step1/Step1";
import Step3 from "./components/Step3/Step3";
import Step4 from "./components/Step4/Step4";
import Step5 from "./components/Step5/Step5";
import Step6 from "./components/Step6/Step6";
import { getRelation } from "@/service/profile-setup.service";
import { DangerMessageConfig, SuccessMessageConfig } from "@/interfaces/alert";
import { StoreContext } from "@/context";
import {  RelationResponse, RelationState } from "@/interfaces/profile-setup.interface";


const ProfileSetup = () => {
  const { dispatch,profileSetupStep } = useContext(StoreContext);
  const[relations,setRelations]=useState<RelationState[]>([])

  const stepsData = {
    step1: {
      heading: "Find top health insurance plans.",
      subHeading: "Who would you like to insure?",
      insuranceFor: relations
    },
  };

  const getRelationData = async () => {
    try {
      const response:RelationResponse =await getRelation();
      setRelations(response?.Relations)
    } catch(error) {
      dispatch(DangerMessageConfig(error));
    }
  };
  useEffect(()=>{
    getRelationData()
  },[])


  return (
    <div className="my-10">
      <Container>
        {profileSetupStep?.currentStep === 0 && <Step1 data={stepsData.step1} />}
        {profileSetupStep?.currentStep === 1 && <Step2 />}
        {profileSetupStep?.currentStep === 2 && <Step3 />}
        {profileSetupStep?.currentStep === 3 && <Step4 />}
        {profileSetupStep?.currentStep === 4 && <Step5 />}
        {profileSetupStep?.currentStep === 5 && <Step6 />}
      </Container>
    </div>
  );
};

export default ProfileSetup;
