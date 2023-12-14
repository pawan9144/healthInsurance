import React, { useState } from "react";
import Indicators from "../../shared/Indicators";
import Image from "next/image";
import { proposerData } from "../../data/data";
import { products } from "@/app/data/home/plans";
import Link from "next/link";
import Summary from "../Summary";
import { AiOutlineArrowLeft } from "react-icons/ai";

const Step3 = () => {
  const [showDeclarationModal, setShowDeclarationModal] = useState(false);

  return (
    <div>
      {showDeclarationModal && (
        <div className="fixed z-10 flex justify-center items-center inset-0 backdrop-brightness-[30%]">
          <div className="w-[600px] rounded-[8px] bg-white p-5">
            <h1 className="text-3xl text-secondary font-[600] text-center">
              Declaration
            </h1>
            <div>
              <div className="flex border-2 px-4 py-2 rounded-[8px] border-quaternary items-center gap-5 mt-10">
                <input type="checkbox" />
                <div>
                  I hereby declare that all information provided above is true,
                  and I accept all{" "}
                  <span className="text-primary">Terms & conditions</span>
                </div>
              </div>
              <div className="flex border-2 px-4 py-2 rounded-[8px] border-quaternary items-center gap-5 mt-10">
                <input type="checkbox" />
                <div>
                  I hereby consent to receive information from Central KYC
                  Registry through SMS/email on the registered number/email
                  address.{" "}
                  <span className="text-primary underline">Read more</span>
                </div>
              </div>
              <Link href="/thank-you-page">
                <button className="w-full px-5 font-[600] py-3 text-white bg-primary rounded-[8px] mt-10">
                  Continue
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
      <div className="mb-10">
        <AiOutlineArrowLeft
          className="cursor-pointer"
          color="#0A225F"
          size={24}
        />
      </div>
      <div className="py-5">
        <Indicators step={3} />
        <div className="mt-10 mobile:flex-wrap flex items-center justify-between">
          <div>
            <h1 className="text-secondary text-2xl font-[600]">
              Tell us who you want to make nominee
            </h1>
            <p className="text-quaternary">
              God forbid, in case of any mishappening to the proposer, nominee
              is the person who gets the benefits.
            </p>
            <div className="mt-10 mobile:text-center">
              Give us the details of nominee to be
            </div>
            <div className="flex flex-wrap items-center gap-7 mobile:flex-col mt-5">
              <input
                className="px-5 w-[300px] py-2 border-2 border-secondary rounded-[8px]"
                type="text"
                placeholder="Relationship with proposer"
              />
              <input
                className="px-5 w-[300px] py-2 border-2 border-secondary rounded-[8px]"
                type="text"
                placeholder="Nominee full name"
              />

              <input
                onFocus={(e) => (e.currentTarget.type = "date")}
                type="text"
                className="px-5 w-[300px] py-2 border-2 border-secondary rounded-[8px]"
                id="dateInput"
                placeholder="Date of Birth"
              />
            </div>
          </div>
          <div className="mobile:hidden">
            <Summary />
          </div>
        </div>
        <button
          onClick={() => setShowDeclarationModal(true)}
          className="w-full px-5 font-[600] py-3 text-white bg-primary rounded-[8px] mt-10"
        >
          Review & Pay
        </button>
      </div>
    </div>
  );
};

export default Step3;
