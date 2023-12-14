import { products } from "@/app/data/home/plans";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";

const Plans = () => {
  const router = useRouter();

  return (
    <div>
      <div className="mt-10">
        <div className="flex items-center gap-5">
          <div className="cursor-pointer" onClick={() => router.back()}>
            <AiOutlineArrowLeft size={20} />
          </div>
          <h1 className="text-3xl text-secondary font-[800]">
            Detailed Comparison
          </h1>
        </div>
        <div className="mt-10 flex mobile:flex-wrap items-center gap-20">
          <div>
            <h3 className="text-secondary font-[600]">Comparison summary</h3>
            <p className="text-quaternary text-xs">4 key differences</p>
          </div>
          <div className="flex flex-wrap mobile:justify-center gap-2 mobile:gap-5">
            {products?.map((item, i) => (
              <div
                key={i}
                className="flex bg-white shadow-md w-[250px] mobile:w-[165px] p-5 flex-col"
              >
                <div className="flex justify-end">
                  <RxCross1 className="cursor-pointer" />
                </div>
                <Image
                  src={item.img}
                  width={500}
                  height={500}
                  className="w-[100px] mx-auto h-[100px] object-contain"
                  alt={item.name}
                />
                <div className="flex text-[10px] flex-col items-center mt-1 gap-2">
                  <span className="text-tertiary">13 more plans</span>
                  <IoIosArrowDown color="#36B37E" />
                </div>

                <h2 className="text-xl mobile:text-[17px] text-secondary font-[600]">
                  {item.name}
                </h2>
                <span className="text-tertiary mt-2 font-[600] text-xs">
                  {item.discount}
                  {`% Direct Discount*`}
                </span>
                <div className="flex text-quaternary items-center gap-1 mt-2">
                  <input type="radio" />
                  <label className="text-xs">Compare the plans</label>
                </div>
                <div className="text-xs text-quaternary flex gap-5 mobile:whitespace-normal whitespace-nowrap mt-2 white">
                  <div className="flex flex-col">
                    <span>Cover amount</span>
                    <span className="text-black mt-1 font-[600]">
                      {item.coverAmount}
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span>Cashless Hospitals</span>
                    <span className="text-black mt-1 font-[600]">
                      {item.cashlessHospitals}
                    </span>
                  </div>
                </div>
                <div className="mx-auto mt-2 w-full">
                  <Link href="/review-plan">
                    <button className="bg-primary w-full rounded-[6px] py-1 px-4 text-white text-xs font-[600]">
                      Buy Now
                    </button>
                  </Link>
                </div>
                <p className="text-quaternary text-xs mt-2 mx-auto">
                  Rs. {item.annualPrice}
                </p>
              </div>
            ))}
            <div className="relative bg-white shadow-md">
              <div className="absolute desktop:hidden right-0 p-3 flex">
                <AiOutlineArrowRight size={20} />
              </div>
              <div className="flex h-full cursor-pointer justify-center items-center gap-5 w-[250px] mobile:w-[165px] p-5 flex-col">
                <div className="w-[100px] h-[100px] rounded-full border-2 flex items-center justify-center border-primary">
                  <span className="text-7xl text-primary mt-[-5px]">+</span>
                </div>

                <span className="text-secondary text-center font-[600]">
                  Add plan to compare
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plans;
