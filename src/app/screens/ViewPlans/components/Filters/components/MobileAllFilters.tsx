import Image from "next/image";
import React, { useState } from "react";
import { RxCrossCircled } from "react-icons/rx";
import { useHomeStateContext } from "../../../context/HomeStateContext";

const MobileAllFilters = ({ filters }: { filters: any }) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("Cover");

  const { homeStates, setHomeStates } = useHomeStateContext();

  return (
    <div>
      <div className="shadow-md flex justify-center items-center bg-white top-0 overflow-y-auto fixed inset-0 w-full z-[20]">
        <div className="mt-auto py-10">
          <div className="flex px-5 items-center py-[50px] justify-between">
            <h3 className="text-secondary mx-auto text-2xl font-[800] text-center">
              Filter plans by
            </h3>
            <RxCrossCircled
              size={27}
              className="cursor-pointer"
              onClick={() =>
                setHomeStates((prevStates) => ({
                  ...prevStates,
                  filterStates: {
                    ...prevStates.filterStates,
                    showAllFilters: false,
                  },
                }))
              }
            />
          </div>
          <div className="flex h-screen w-full flex-wrap items-center gap-10">
            <div className="bg-secondary flex flex-wrap text-white py-5 px-1 w-full">
              {filters?.map((item: any, i: number) => (
                <div
                  key={i}
                  className="cursor-pointer"
                  onClick={() => {
                    setActiveTabIndex(i);
                    setActiveTab(item.title);
                  }}
                >
                  <div
                    className={`${
                      activeTabIndex === i
                        ? "bg-white text-secondary rounded-3xl"
                        : ""
                    } p-3`}
                  >
                    <span>{item.title}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-10 px-5">
              <h3 className="text-xl font-[700]">{activeTab}</h3>
              <div>
                {filters
                  ?.filter((item: any, i: number) => activeTabIndex === i)
                  ?.map((item: any, i: number) => (
                    <div key={i} className="flex flex-wrap gap-5">
                      {item.options?.map((item2: any, j: number) => (
                        <div
                          key={j}
                          className={`px-6 w-[310px] rounded-[6px] flex gap-3 py-2 border-2 border-quaternary`}
                        >
                          <input name="options" type="radio" />
                          {item2.img && (
                            <Image
                              className="object-contain"
                              src={item2.img}
                              width={40}
                              height={40}
                              alt="Niva"
                            />
                          )}
                          {item2.item}
                        </div>
                      ))}
                    </div>
                  ))}
              </div>
              <div className="mt-5 flex justify-center gap-10">
                <button className="text-primary px-10 py-1 font-[600]">
                  Reset
                </button>
                <button className="bg-primary px-10 py-1 text-white font-[600] rounded-[10px]">
                  Apply
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileAllFilters;
