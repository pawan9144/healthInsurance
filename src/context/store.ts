import { IIntialState } from "@/interfaces/store.interface";

export const initialState: IIntialState = {
  alert: { status: false, variant: undefined, message: "", icon: "" },
  details:{
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
  },
  profileSetupStep: {
    currentStep: 0,
  },
  step1States: {
    moreMembersClicked: false,
    selectedBtn: null,
  },
  filterStates: {
    currentPopUp: {
      title: "",
      options: [],
    },
    showPopUp: false,
    showAllFilters: false,
    selectedOption: null,
    showCovers: false,
  },
};
