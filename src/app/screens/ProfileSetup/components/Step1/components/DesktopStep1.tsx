import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";

const DesktopStep1 = ({
  data,
  onChangeHandler,
}: {
  data: any;
  onChangeHandler: any;
}) => {
 const [showMore,setShowMore]=useState(8)

  return (
    <div>
      <div className="text-[24px] w-[860px] mobile:hidden grid grid-rows-3 grid-cols-3 gap-5 mobile:grid-cols-2">
        {data?.insuranceFor?.slice(0,showMore).map((item: any, i: number) => {
          return (
            <div
              key={item?.RelationID}
              className="border-[2px] whitespace-nowrap  w-full opacity-[55%] font-[300] gap-2 rounded-[8px] flex items-center ps-5 px-10 py-2 border-[#2E2E2E] text-[#2E2E2E]"
            >
              <input
                onChange={() =>
                  onChangeHandler({
                    relationId: item?.RelationID,
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
                  className="border-[2px] whitespace-nowrap cursor-pointer opacity-[55%] w-full font-[300] gap-2 rounded-[8px] flex items-center ps-5 px-[50px] py-2 border-[#2E2E2E] text-[#2E2E2E]"
                >
                  <span className="bg-primary w-[20px] h-[20px] p-[2px] rounded-full flex items-center justify-center text-white">
                    <AiOutlinePlus className="w-[20px] h-[20px]" />
                  </span>
                  More Members
                </div>:<div
                onClick={() => setShowMore(8)}
                  className="border-[2px] whitespace-nowrap cursor-pointer opacity-[55%] w-full font-[300] gap-2 rounded-[8px] flex items-center ps-5 px-[50px] py-2 border-[#2E2E2E] text-[#2E2E2E]"
                >
                  <span className="bg-primary w-[20px] h-[20px] p-[2px] rounded-full flex items-center justify-center text-white">
                    <AiOutlinePlus className="w-[20px] h-[20px]" />
                  </span>
                  Less Members
                </div>}</>}
      </div>
    </div>
  );
};

export default DesktopStep1;
