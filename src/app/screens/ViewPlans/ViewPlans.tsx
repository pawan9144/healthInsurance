"use client"

import React, { useContext, useEffect } from "react";
import InsuredDetails from "./components/InsuredDetails";
import Filter from "./components/Filters/Filter";
import Companies from "./components/Companies";
import Products from "./components/Products";
import Image from "next/image";
import PopUp from "./shared/PopUp";
import { InsurancePlan } from "@/interfaces/profile-setup.interface";
import { StoreContext } from "@/context";
import { FILTER_PLANS } from "@/constants/reducerAction.contant";
interface Iprops{
  planList?:InsurancePlan
}
const ViewPlans:React.FC<Iprops> = ({planList}):JSX.Element => {
  const { dispatch,filterStates } = useContext(StoreContext);
  console.log("🚀 ~ file: ViewPlans.tsx:18 ~ filterStates:", filterStates)

  useEffect(() => {
    if (
      filterStates?.showCovers ||
      filterStates?.showAllFilters
    ) {
      document.body.style.overflowY = "hidden";
      return;
    }
    document.body.style.overflowY = "";
  }, [
    filterStates?.showCovers,
    filterStates?.showAllFilters,
  ]);

  return (
    <div className="bg-[#f4f5f7]">
      {filterStates?.showPopUp &&
        filterStates?.currentPopUp?.title === "Age" && (
          <PopUp
            isOpen={filterStates?.showPopUp}
            onClose={() =>
              dispatch({
                type:FILTER_PLANS,
                payload: { 
                  showPopUp: false, 
              },
              })
            }
            title={filterStates?.currentPopUp.title}
          >
            <div className="px-6 py-3">
              <div className="h-[200px] flex flex-col gap-5 overflow-y-auto">
                {filterStates?.currentPopUp?.options?.map(
                  (item: any, i: number) => {
                    return (
                      <div
                        key={i}
                        className="p-2 rounded-[6px] border-2 border-primary flex items-center justify-between gap-5"
                      >
                        <span>{item.insurer}</span>
                        <div>
                          <input
                            defaultValue="1997-04-15"
                            type="date"
                            className="text-center p-2"
                          />
                        </div>
                      </div>
                    );
                  }
                )}
              </div>
              <div>
                <div className="mt-5 flex justify-between">
                  <button
                    onClick={() =>
                      dispatch({
                        type:FILTER_PLANS,
                        payload: { 
                          showPopUp: false,        
                      },
                      })
                    }
                    className="text-primary px-10 py-1 font-[600]"
                  >
                    Cancel
                  </button>
                  <button className="bg-primary px-10 py-1 text-white font-[600] rounded-[10px]">
                    Apply
                  </button>
                </div>
              </div>
            </div>
          </PopUp>
        )}

      {filterStates?.showPopUp &&
        filterStates?.currentPopUp?.title !== "Age" &&
        filterStates?.currentPopUp?.title !== "Pin Code" && (
          <PopUp
            isOpen={filterStates?.showPopUp}
            onClose={() =>
              dispatch({
                type:FILTER_PLANS,
                payload: { 
                  showPopUp: false,        
              },
              })
            }
            title={filterStates?.currentPopUp.title}
          >
            <div className="px-6 py-3 mobile:px-3">
              <div className="h-[200px] overflow-y-auto overflow-x-hidden">
                {filterStates?.currentPopUp?.options?.map(
                  (item: any, i: number) => {
                    return (
                      <div key={i} className="py-1">
                        <div className="px-6 w-[310px] mobile:w-full rounded-[6px] flex gap-3 py-2 border border-primary">
                          {filterStates?.currentPopUp?.title ===
                          "Plan Type" ? (
                            <div className="flex items-center gap-2">
                              <input
                                onChange={() =>
                                  dispatch({
                                    type:FILTER_PLANS,
                                    payload: { 
                                      showPopUp: false,        
                                      selectedOption: i,
                                  },
                                  })                       
                               }
                                name="options"
                                type="checkbox"
                              />
                              {item.img && (
                                <Image
                                  className="object-contain"
                                  src={item.img}
                                  width={40}
                                  height={40}
                                  alt="Niva"
                                />
                              )}

                              <span>{item.item}</span>
                            </div>
                          ) : (
                            <div className="flex items-center gap-2">
                              <input
                                onChange={() =>
                                  dispatch({
                                    type:FILTER_PLANS,
                                    payload: { 
                                      showPopUp: false,        
                                      selectedOption: i,
                                  },
                                  })
                                }
                                name="options"
                                type="radio"
                              />
                              {item.img && (
                                <Image
                                  className="object-contain"
                                  src={item.img}
                                  width={40}
                                  height={40}
                                  alt="Niva"
                                />
                              )}
                              {filterStates?.currentPopUp?.title ===
                              "Sum Insured" ? (
                                <span>${item.item}</span>
                              ) : (
                                <span>{item.item}</span>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  }
                )}
              </div>
              <div>
                <div className="mt-5 flex justify-between">
                  <button
                    onClick={() =>
                      dispatch({
                        type:FILTER_PLANS,
                        payload: { 
                          showPopUp: false,        
                      },
                      })
                    }
                    className="text-primary px-10 py-1 font-[600]"
                  >
                    Cancel
                  </button>
                  <button className="bg-primary px-10 py-1 text-white font-[600] rounded-[10px]">
                    Apply
                  </button>
                </div>
              </div>
            </div>
          </PopUp>
        )}

      <div>
        <InsuredDetails />
        <Filter />
        <Companies />
        <Products />
      </div>
    </div>
  );
};

export default ViewPlans;

