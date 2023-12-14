import { products } from "@/app/data/home/plans";
import Image from "next/image";
import React from "react";
import { proposerData } from "../data/data";

const Summary = () => {
  return (
    <div>
      <div>
        <div className="mobile:w-full mobile:hidden mobile:mt-10 mt-10 w-[350px]">
          <div className="shadow-md bg-white p-5">
            <div>
              <div className="flex justify-between items-center gap-5">
                <h3 className="text-secondary text-xl font-[600]">Summary</h3>
                <Image
                  src={`${products[0]?.img}`}
                  className="w-[50px] h-[50px] object-contain"
                  width={50}
                  height={50}
                  alt="Image"
                />
              </div>
              <div className="h-[1px] w-full bg-quaternary" />
            </div>
            <div className="flex justify-between mt-5">
              <span>Plan For: </span>
              <span className="text-quaternary">
                {proposerData?.summary.planFor}
              </span>
            </div>
            <div className="flex justify-between mt-5">
              <span>Age: </span>
              <span className="text-quaternary">
                {proposerData?.summary.age}
              </span>
            </div>
            <div className="flex justify-between mt-5">
              <span>Location: </span>
              <span className="text-quaternary">
                {proposerData?.summary.location}
              </span>
            </div>
            <div className="flex justify-between mt-5">
              <span>Gender: </span>
              <span className="text-quaternary">
                {proposerData?.summary.gender}
              </span>
            </div>
            <div className="flex justify-between mt-5">
              <span>Sum Insured: </span>
              <span className="text-quaternary">
                {proposerData?.summary.sumInsured}
              </span>
            </div>
            <div className="flex justify-between mt-5">
              <span>Base Premium - 1 year</span>
              <span className="font-[600]">Rs. 9,188</span>
            </div>

            <div className="pt-5 pb-2">
              <div className="h-[1px] w-full bg-quaternary opacity-50" />
            </div>
            <div className="mt-4 text-lg font-[600] flex justify-between items-center">
              <span>Total Premium</span>
              <span>Rs. 9189/-</span>
            </div>
          </div>
        </div>
        <div className="mobile:w-full desktop:hidden mobile:mt-10 mt-10 w-[350px]">
          <div className="shadow-md  h-screen  bg-white p-5">
            <div>
              <div className="flex justify-between items-center gap-5">
                <h3 className="text-secondary text-xl font-[600]">Summary</h3>
                <Image
                  src={`${products[0]?.img}`}
                  className="w-[50px] h-[50px] object-contain"
                  width={50}
                  height={50}
                  alt="Image"
                />
              </div>
              <div className="h-[1px] w-full bg-quaternary" />
            </div>
            <div className="flex justify-between mt-5">
              <span>Plan For: </span>
              <span className="text-quaternary">
                {proposerData?.summary.planFor}
              </span>
            </div>
            <div className="flex justify-between mt-5">
              <span>Age: </span>
              <span className="text-quaternary">
                {proposerData?.summary.age}
              </span>
            </div>
            <div className="flex justify-between mt-5">
              <span>Location: </span>
              <span className="text-quaternary">
                {proposerData?.summary.location}
              </span>
            </div>
            <div className="flex justify-between mt-5">
              <span>Gender: </span>
              <span className="text-quaternary">
                {proposerData?.summary.gender}
              </span>
            </div>
            <div className="flex justify-between mt-5">
              <span>Sum Insured: </span>
              <span className="text-quaternary">
                {proposerData?.summary.sumInsured}
              </span>
            </div>
            <div className="flex justify-between mt-5">
              <span>Base Premium - 1 year</span>
              <span className="font-[600]">Rs. 9,188</span>
            </div>

            <div className="pt-5 pb-2">
              <div className="h-[1px] w-full bg-quaternary opacity-50" />
            </div>
            <div>
              <div className="mt-4 text-lg font-[600] flex justify-between items-center">
                <span>Total Premium</span>
                <span>Rs. 9189/-</span>
              </div>
              <button className="w-full px-5 font-[600] py-2 text-white bg-primary rounded-[8px] mt-5">
                Proceed to Payment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
