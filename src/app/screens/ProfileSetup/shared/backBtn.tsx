import { PROFILE_SETUP_STEP } from '@/constants/reducerAction.contant';
import { StoreContext } from '@/context';
import React, { useContext } from 'react'
import { AiOutlineArrowLeft } from 'react-icons/ai'

const BackBtn = () => {
    const { profileSetupStep,dispatch } = useContext(StoreContext);

    const backClickHandler = () => {
      dispatch({
        type: PROFILE_SETUP_STEP,
        payload: { currentStep: profileSetupStep?.currentStep-1 },
      })
    };
  return (
    <div className="mb-10"  onClick={() => backClickHandler()}
    >
    <AiOutlineArrowLeft
      className="cursor-pointer"
      color="#0A225F"
      size={24}
    />
  </div>
  )
}

export default BackBtn