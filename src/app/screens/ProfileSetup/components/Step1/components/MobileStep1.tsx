import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { useProfileSetupStateContext } from "../../../context/ProfileSetupStateContext";

const MobileStep1 = ({
  data,
  onChangeHandler,
}: {
  data: any;
  onChangeHandler: any;
}) => {
  const [showMore,setShowMore]=useState(8)
  return (
    <div className="desktop:hidden mobile:text-[17px] grid grid-rows-3 gap-5 mobile:grid-cols-2 w-full">
      {data?.insuranceFor?.slice(0,showMore).map((item: any, i: number) => {
     

        return (
          <div
            key={item?.RelationID}
            className="border-[2px] whitespace-nowrap w-full opacity-[55%] font-[300] gap-2 rounded-[8px] flex items-center p-2 border-[#2E2E2E] text-[#2E2E2E]"
          >
            <input
              onChange={() =>
                onChangeHandler({
                  RelationID: item?.RelationID,
                })
              }
              className="w-[20px] h-[20px] border-[2px] rounded-[5px]"
              type="checkbox"
              required
            />
            <span>
              {item.RelationType?.charAt(0).toUpperCase() +
                item.RelationType?.slice(1)}
            </span>
          </div>
        );
      })}
      {data?.insuranceFor?.length>7&&<>{data?.insuranceFor?.length>showMore? <div
                      onClick={() => setShowMore(data?.insuranceFor?.length)}
                className="border-[2px] whitespace-nowrap cursor-pointer opacity-[55%] w-full font-[300] gap-2 rounded-[8px] flex items-center p-2 border-[#2E2E2E] text-[#2E2E2E]"
              >
                <span className="bg-primary p-[2px] mobile:w-[18px] mobile:h-[18px] rounded-full flex items-center justify-center text-white">
                  <AiOutlinePlus className="mobile:w-[17px] mobile:h-[17px]" />
                </span>
                More Members
              </div>:<div
                                    onClick={() => setShowMore(8)}
                className="border-[2px] whitespace-nowrap cursor-pointer opacity-[55%] w-full font-[300] gap-2 rounded-[8px] flex items-center p-2 border-[#2E2E2E] text-[#2E2E2E]"
              >
                <span className="bg-primary p-[2px] mobile:w-[18px] mobile:h-[18px] rounded-full flex items-center justify-center text-white">
                  <AiOutlinePlus className="mobile:w-[17px] mobile:h-[17px]" />
                </span>
                Less Members
              </div>}</>}
      
    </div>
  );
};

export default MobileStep1;
