"use client";
import React from "react";
import ProfileSetup from "../screens/ProfileSetup/ProfileSetup";
import ProfileSetupStateContext from "../screens/ProfileSetup/context/ProfileSetupStateContext";

const page = () => {
  return (
    <div>
      <ProfileSetupStateContext>
        <ProfileSetup />
      </ProfileSetupStateContext>
    </div>
  );
};

export default page;
