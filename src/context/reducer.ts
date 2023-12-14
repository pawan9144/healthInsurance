import { FILTER_PLANS, HANDLE_ALERT_MESSAGE, PROFILE_SETUP, PROFILE_SETUP_STEP } from "@/constants/reducerAction.contant";
import { IIntialState } from "@/interfaces/store.interface";

  
  export const reducer = (
    state: IIntialState,
    action: { type: string; payload: any }
  ) => {
    switch (action.type) {
      case PROFILE_SETUP:
        return {
          ...state,
          profileSetup:{
            CriticalIllness: action?.payload?.CriticalIllness,
            IsExisitingIllness: action?.payload?.IsExisitingIllness,
            IsSurgicalProcdure: action?.payload?.IsSurgicalProcdure,
            RoomRentWaiver: action?.payload?.RoomRentWaiver,
            InsuredRequests: [
              {
                DateOfBirth: action?.payload?.DateOfBirth,
                PreExistingDisease: action?.payload?.PreExistingDisease,
                RelationToInsured: action?.payload?.RelationToInsured,
                SumInsured: action?.payload?.SumInsured,
                PinCode: action?.payload?.PinCode,
                Age: action?.payload?.Age,
                Gender: action?.payload?.Gender,
                MaritalStatus:action?.payload?.MaritalStatus,
              },
            ],
            PromoCode:action?.payload?.PromoCode,
            EnquiryNo:action?.payload?.EnquiryNo,
            BusinessType:action?.payload?.BusinessType,
          }
        };
      case HANDLE_ALERT_MESSAGE:
        return {
          ...state,
          alert: {
            ...alert,
            icon: action?.payload?.icon,
            status: action?.payload?.status,
            message: action?.payload?.message,
            variant: action?.payload?.variant,
          },
        };
      case PROFILE_SETUP_STEP:
        return {
          ...state,
          profileSetupStep: {
            currentStep:action?.payload?.currentStep,
          },
        };
        case FILTER_PLANS:
          return {
            ...state,
            filterStates: {
              ...state.filterStates,
              currentPopUp: {
                title: action?.payload?.currentPopUp?.title || state.filterStates.currentPopUp.title,
                options: action?.payload?.currentPopUp?.options || state.filterStates.currentPopUp.options,
              },
              showPopUp: action?.payload?.showPopUp !== undefined ? action.payload.showPopUp : state.filterStates.showPopUp,
              showAllFilters: action?.payload?.showAllFilters !== undefined ? action.payload.showAllFilters : state.filterStates.showAllFilters,
              selectedOption: action?.payload?.selectedOption !== undefined ? action.payload.selectedOption : state.filterStates.selectedOption,
              showCovers: action?.payload?.showCovers !== undefined ? action.payload.showCovers : state.filterStates.showCovers,
            },
          };
      default:
        return state;
    }
  };
  