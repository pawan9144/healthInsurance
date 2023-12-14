import { TextField } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";

const Details = () => {
  const [selectedGender, setSelectedGender] = useState<number>();

  return (
    <div>
      <div className="flex mobile:flex-wrap mobile:justify-between items-center gap-[50px] mobile:gap-5 mt-5">
        <div>
          <div
            onClick={() => setSelectedGender(0)}
            className={`border-[2px] cursor-pointer w-[150px] mobile:w-[100px] flex flex-col justify-center items-center py-2 ${
              selectedGender === 0 && "border-primary"
            } border-black border-opacity-[85%] rounded-[20px]`}
          >
            <div>
              <Image
                className="object-cover w-[70px] h-[70px] mobile:w-[40px] mobile:h-[40px]"
                src="/assets/profileSetup/step4/man1.png"
                width={70}
                height={70}
                alt="Man"
              />
            </div>
            <p className="text-center mt-2">Man</p>
          </div>
        </div>
        <div>
          <div
            onClick={() => setSelectedGender(1)}
            className={`border-[2px] cursor-pointer w-[150px] mobile:w-[100px] flex flex-col justify-center items-center py-2 ${
              selectedGender === 1 && "border-primary"
            } border-black border-opacity-[85%] rounded-[20px]`}
          >
            <div>
              <Image
                className="object-cover w-[70px] h-[70px] mobile:w-[40px] mobile:h-[40px]"
                src="/assets/profileSetup/step4/woman.png"
                width={70}
                height={70}
                alt="Woman"
              />
            </div>
            <p className="text-center mt-2">Woman</p>
          </div>
        </div>
        <div>
          <div
            onClick={() => setSelectedGender(2)}
            className={`border-[2px] cursor-pointer w-[150px] mobile:w-[100px] flex flex-col justify-center items-center py-2 ${
              selectedGender === 2 && "border-primary"
            } border-black border-opacity-[85%] rounded-[20px]`}
          >
            <div>
              <Image
                className="object-cover w-[70px] h-[70px] mobile:w-[40px] mobile:h-[40px]"
                src="/assets/profileSetup/step4/others.png"
                width={70}
                height={70}
                alt="Others"
              />
            </div>
            <p className="text-center mt-2">Others</p>
          </div>
        </div>
      </div>
      <div className="flex gap-20 mobile:gap-5 mobile:flex-col mt-7">
        <TextField
          className="w-[400px] mobile:w-full"
          InputProps={{ sx: { borderRadius: "10px" } }}
          id="outlined-basic"
          label="Enter Full Name"
          variant="outlined"
        />
        <TextField
          className="w-[400px] mobile:w-full"
          InputProps={{ sx: { borderRadius: "10px" } }}
          id="outlined-basic"
          label="Enter Mobile Number"
          variant="outlined"
        />
      </div>
    </div>
  );
};

export default Details;
