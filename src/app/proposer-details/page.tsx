"use client";
import React from "react";
import ProposerDetails from "../screens/Proposer Details/ProposerDetails";
import ProposerDetailsStateContext from "../screens/Proposer Details/context/ProposerDetailsStateContext";

const page = () => {
  return (
    <div>
      <ProposerDetailsStateContext>
        <ProposerDetails />
      </ProposerDetailsStateContext>
    </div>
  );
};

export default page;
