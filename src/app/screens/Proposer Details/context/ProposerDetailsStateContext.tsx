import React, { useContext, useState } from "react";
import { createContext } from "react";

const Context = createContext<any>(null);

const ProposerDetailsStateContext = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [proposerDetailsStates, setProposerDetailsStates] = useState({
    stepsStates: {
      currentStep: 1,
    },
  });

  const contextValues = { proposerDetailsStates, setProposerDetailsStates };

  return <Context.Provider value={contextValues}>{children}</Context.Provider>;
};

export const useProposerDetailsStateContext = () => useContext(Context);

export default ProposerDetailsStateContext;
