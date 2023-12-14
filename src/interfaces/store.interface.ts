export interface IIntialState {
    alert: {
      icon: string;
      status: boolean;
      variant:
        | "primary"
        | "secondary"
        | "success"
        | "danger"
        | "warning"
        | "info"
        | "light"
        | "dark"
        | undefined;
      message: string | undefined;
    };
    details:{
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
      };
    profileSetupStep:{
      currentStep:number
    };
    step1States:{
      moreMembersClicked:boolean ,
      selectedBtn: any,
    }
    filterStates: {
      currentPopUp: {
        title: string;
        options: any;
      };
      showPopUp: boolean;
      showAllFilters: boolean;
      selectedOption: any;
      showCovers: boolean;
    };
  }
  