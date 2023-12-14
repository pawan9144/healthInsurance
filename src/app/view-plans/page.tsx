import React from "react";
import { getPlanById } from "@/service/profile-setup.service";
import ViewPlans from "../screens/ViewPlans/ViewPlans";


async function getPlansList(Enquiryno:number) {
  try {
    if(Enquiryno){
      const res = await getPlanById(Enquiryno)
      return res
    }
} catch (error) {
  throw new Error('Failed to fetch data');
}
}
const Page = async({searchParams}:any) => {
 const planList = await getPlansList(searchParams?.Enquiryno)
  return (
    <>
        <ViewPlans planList={planList}/>
    </>
  );
};


export default Page;
