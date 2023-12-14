import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";

const Banner = ({ data }: { data: any }) => {
  const router = useRouter();

  return (
    <div className="mt-10">
      <div className="flex items-center gap-5">
        <div className="cursor-pointer" onClick={() => router.back()}>
          <AiOutlineArrowLeft size={20} />
        </div>
        <h1 className="text-2xl desktop:w-full text-center text-secondary font-[600]">Product Details</h1>
      </div>
      <div className="flex p-4 mt-10 flex-wrap items-center justify-between shadow-md rounded-[12px]">
        <div className="flex flex-wrap items-center gap-5">
          <Image
            src={data?.img}
            className="object-contain mobile:mx-auto"
            width={150}
            height={150}
            alt={data?.name}
          />
          <h2 className="text-secondary text-xl mobile:mx-auto font-[600]">
            {data?.name}
          </h2>
        </div>
        <div className="font-[600] mobile:mx-auto">
          <span>Cover: </span>&nbsp;
          <span className="text-primary">Rs. {data?.coverAmount}</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
