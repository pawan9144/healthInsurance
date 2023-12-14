import { Variant } from "../constants/common.constant";
import { HANDLE_ALERT_MESSAGE } from "../constants/reducerAction.contant";

export function SuccessMessageConfig(messsage: string) {
  const success = "Success";
  return {
    type: HANDLE_ALERT_MESSAGE,
    payload: {
      status: true,
    //   icon: VerifyIcon,
      message: messsage || success,
      variant: Variant.SUCCESS,
    },
  };
}

export function DangerMessageConfig(error: any, errorMessage?: string) {
  let errMsg = "Oops! Something went wrong. Please try again.";
  if (error?.message) {
    errMsg = error?.message
  }
  if (error?.response?.data?.error) {
    errMsg = error?.response?.data?.error;
  } else if (error?.response?.data.message) {
    errMsg = error?.response?.data.message;
  } else if (error?.response?.statusText) {
    errMsg = error?.response?.data.statusText;
  } else if (error?.response?.detail) {
    errMsg = error?.response?.data.detail;
  } else if (error?.response?.data?.message) {
    errMsg = error?.response?.data?.message;
  } else if (error?.message === 'Network Error') {
    errMsg = 'An error occurred while processing your request.';
  } else if (error?.message) {
    errMsg = error?.message;
  }
  return {
    type: HANDLE_ALERT_MESSAGE,
    payload: {
      status: true,
      // icon: CrossIcon,
      message: errorMessage || errMsg,
      variant: Variant.DANGER,
    },
  };
}

export function WarningMessageConfig(messsage: string) {
  const errMsg = "Something went wrong, please try again later";
  return {
    type: HANDLE_ALERT_MESSAGE,
    payload: {
      status: true,
    //   icon: WarningIcon,
      message: messsage || errMsg,
      variant: Variant.WARNING,
    },
  };
}
