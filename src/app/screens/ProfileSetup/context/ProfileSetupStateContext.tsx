import React, { useContext, useState } from "react";
import { createContext } from "react";

interface contextProps {
  profileSetupStates: any;
  setProfileSetupStates: React.Dispatch<React.SetStateAction<any>>;
}

interface details {
  CriticalIllness: boolean;
  IsExisitingIllness: boolean;
  IsSurgicalProcdure: boolean;
  RoomRentWaiver: boolean;
  InsuredRequests: [
    {
      DateOfBirth: string;
      PreExistingDisease: boolean;
      RelationToInsured: number;
      SumInsured: number;
      PinCode: number;
      Age: number;
      Gender: number;
      MaritalStatus: number;
    }
  ];
  PromoCode: "";
  EnquiryNo: "";
  BusinessType: number;
}

const Context = createContext<contextProps>({
  profileSetupStates: {},
  setProfileSetupStates: () => {},
});

const ProfileSetupStateContext = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const details: details = {
    CriticalIllness: true,
    IsExisitingIllness: true,
    IsSurgicalProcdure: false,
    RoomRentWaiver: true,
    InsuredRequests: [
      {
        DateOfBirth: "1988-07-01",
        PreExistingDisease: true,
        RelationToInsured: 1,
        SumInsured: 500000,
        PinCode: 545454,
        Age: 34,
        Gender: 1,
        MaritalStatus: 1,
      },
    ],
    PromoCode: "",
    EnquiryNo: "",
    BusinessType: 1,
  };

  const [profileSetupStates, setProfileSetupStates] = useState({
    details: details,
    stepsStates: {
      currentStep: 0,
    },
    step1States: {
      moreMembersClicked: false,
      selectedBtn: null,
    },
  });

  const contextValues = { profileSetupStates, setProfileSetupStates };

  return <Context.Provider value={contextValues}>{children}</Context.Provider>;
};

export const useProfileSetupStateContext = () => useContext(Context);

export default ProfileSetupStateContext;
