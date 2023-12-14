import React, { useEffect, useState } from "react";
import { TbFilter } from "react-icons/tb";
import { useHomeStateContext } from "../../../context/HomeStateContext";
import MobileAllFilters from "./MobileAllFilters";

const MobileFilters = ({ filters }: { filters: any }) => {
  const [openFilter, setOpenFilter] = useState(false);

  const { homeStates, setHomeStates } = useHomeStateContext();

  useEffect(() => {
    if (!openFilter) {
      return document.body.removeEventListener("click", () =>
        setOpenFilter(false)
      );
    }
    document.body.addEventListener("click", () => setOpenFilter(false));
  }, [openFilter]);

  return (
    <div className="desktop:hidden">
      {homeStates.filterStates.showAllFilters && (
        <MobileAllFilters filters={filters} />
      )}
      <div className={`bottom-[80px] z-20 right-5 fixed`}>
        <div
          onClick={() => setOpenFilter(!openFilter)}
          className="rounded-full border-2 border-white drop-shadow-md flex items-center justify-center w-[45px] h-[45px] bg-secondary"
        >
          <TbFilter size={25} color="white" />
        </div>
      </div>

      <div
        className={`fixed top-0 left-0 w-[50%] h-[100vh] bg-secondary transform ${
          openFilter ? "translate-x-0" : "translate-x-[-100%]"
        } transition duration-300 ease-in-out`}
      >
        <div className="py-7 text-white">
          {filters?.map((item: any, i: number) => {
            if (item.type === "popup") {
              return (
                <div key={i}>
                  <button
                    onClick={() => {
                      setHomeStates((prevStates: any) => ({
                        ...prevStates,
                        filterStates: {
                          ...prevStates.filterStates,
                          currentPopUp: {
                            title: item.title,
                            options: item.options,
                          },
                          showPopUp: true,
                        },
                      }));
                    }}
                    className="py-2 px-4 flex gap-3 items-center"
                  >
                    <span>•</span> {item.title}
                  </button>
                </div>
              );
            } else if (item.type === "btn") {
              if (item.icon) {
                return (
                  <div key={i}>
                    <button
                      onClick={() =>
                        setHomeStates((prevStates) => ({
                          ...prevStates,
                          filterStates: {
                            ...prevStates.filterStates,
                            showAllFilters:
                              !homeStates.filterStates.showAllFilters,
                          },
                        }))
                      }
                      className="flex items-center gap-3 border-secondary rounded-[47px] py-2 px-4"
                    >
                      <TbFilter />
                      {item.title}
                    </button>
                  </div>
                );
              } else {
                return (
                  <div key={i}>
                    <button className="py-2 gap-3 flex items-center px-4 text-left">
                      <span>• </span> {item.title}
                    </button>
                  </div>
                );
              }
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default MobileFilters;
