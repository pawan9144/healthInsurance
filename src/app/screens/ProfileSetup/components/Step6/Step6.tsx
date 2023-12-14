import React, { useContext, useState } from "react";
import Indicators from "../../shared/Indicators";
import Details from "./components/Details";
import BackBtn from "../../shared/backBtn";
import { StoreContext } from "@/context";
import { PlanSaveDetail } from "@/service/profile-setup.service";
import { URL } from "@/constants/url.constant";
import { DangerMessageConfig } from "@/interfaces/alert";
import { useRouter } from "next/navigation";
import { Loader } from "@/components/Loader";

const Step6 = () => {
  const[isSubmittingForm,setIsSubmittingForm]=useState(false)
  const { dispatch } = useContext(StoreContext);
  const router = useRouter();

  const handleSubmitForm = async () => {
    const valueData:any = {
      is_to_be_announced: "toBeAnnounced",
      is_address_field: "emailAddress",
      event_id: "Cookies.get(STORAGE.EVENT_ID)",
    };
    try {
      setIsSubmittingForm(true);
      const response =await PlanSaveDetail(valueData);
      router.push(`${URL?.View_plans}?Enquiryno=${Number("20231211162158230712")}`)
      setIsSubmittingForm(false);
    } catch (error: any) {
      dispatch(DangerMessageConfig(error));
    }
  };
  return (
    <div>
     <BackBtn/>
      <Indicators step={6} />
      <h5 className="text-[36px] mobile:text-[22px] mt-10 mb-4 text-secondary font-[600]">{`Tell us about yourself`}</h5>
      <div className="w-[131px] mt-3 h-[5px] bg-[#36B37E]"></div>
      <p className="text-[32px] mobile:text-[20px] mt-5">
        Fill personal details
      </p>
      <Details />
      {
        isSubmittingForm?
        <button className="bg-primary w-full mt-10 font-[700] text-white py-4 rounded-[10px]">
<Loader/>      
</button>:<button className="bg-primary w-full mt-10 font-[700] text-white py-4 rounded-[10px]" onClick={handleSubmitForm}>
        View Plans
      </button>
      }
        
    </div>
  );
};

export default Step6;
