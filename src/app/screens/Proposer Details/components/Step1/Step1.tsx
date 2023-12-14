import React, { useState } from "react";
import Indicators from "../../shared/Indicators";
import { proposerData } from "../../data/data";
import ContinueBtn from "../../shared/ContinueBtn";
import Summary from "../Summary";

const Step1 = () => {
  const [activeTab, setActiveTab] = useState<any>(0);

  return (
    <div>
      <div className="py-5">
        <Indicators step={1} />
      </div>
      <div>
        <div className="flex mobile:hidden gap-10 mobile:flex-wrap justify-between">
          <div className="flex flex-col justify-center mobile:w-full mobile:flex-row font-[600] gap-5 mt-10 p-[50px] ps-0 mobile:p-5 bg-secondary rounded-[35px] mobile:rounded-none rounded-s-none">
            {proposerData?.tabs?.map((item, i) => (
              <div
                onClick={() => setActiveTab(i)}
                key={i}
                className={`flex cursor-pointer w-[200px] ${
                  activeTab === i
                    ? "bg-white text-secondary rounded-[35px] mobile:rounded-[35px] rounded-s-none"
                    : "bg-secondary text-white"
                }`}
              >
                <div className="text-xl mobile:text-xs rounded-[8px] px-5 py-2">
                  {item.tab}
                </div>
              </div>
            ))}
          </div>
          <div className="mobile:mt-5 mt-10">
            <div>
              <h1 className="text-xl text-secondary font-[600]">
                {proposerData.tabs[activeTab]?.heading}
              </h1>
              <p className="text-quaternary">
                {proposerData.tabs[activeTab]?.desc}
              </p>
              {activeTab === 1 && (
                <div className="flex flex-wrap mobile:grid mobile:grid-cols-2 mobile:grid-rows-2 gap-2 mt-10 mobile:gap-4">
                  {proposerData.tabs[activeTab]?.btns?.map((item, i) => (
                    <button
                      className="w-[146.5px] mobile:w-full text-left ps-2 rounded-[8px] py-2 border-2 border-secondary"
                      key={i}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              )}
              <div className="grid mobile:flex mobile:flex-wrap  grid-cols-2 grid-rows-2 gap-2 mobile:gap-5 mt-5">
                {proposerData?.tabs[activeTab]?.fields?.map((item, i) => (
                  <div key={i} className="mobile:w-full">
                    {item !== "Dropdown" && item !== "Input File" && (
                      <input
                        className="border-2 w-full mobile:w-full border-secondary px-5 py-2 rounded-[8px]"
                        type="text"
                        placeholder={item}
                      />
                    )}
                    {item === "Name" && (
                      <div className="mt-2 flex items-center gap-1 text-quaternary">
                        <input type="checkbox" />
                        <label>{`Don't have a last name.`}</label>
                      </div>
                    )}
                    {item === "PAN Card" && (
                      <div className="mt-2 flex items-center gap-1 text-quaternary">
                        <input type="checkbox" />
                        <label>{`I Don't have a PAN Card.`}</label>
                      </div>
                    )}

                    {item === "Dropdown" && (
                      <div className="text-quaternary">
                        <select className="w-full mobile:w-full bg-white px-4 py-[9.2px] border-2 border-secondary rounded-[8px]">
                          <option>Option 1</option>
                          <option>Option 2</option>
                          <option>Option 3</option>
                        </select>
                      </div>
                    )}
                    <span>
                      {item === "Input File" && (
                        <span>
                          <input className="w-[290px] mt-2" type="file" />
                        </span>
                      )}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="mobile:hidden">
            <Summary />
          </div>
        </div>

        <div className="flex desktop:hidden flex-col gap-5">
          {proposerData?.tabs?.map((item, i) => (
            <div key={i}>
              <div
                onClick={() => setActiveTab(activeTab === i ? null : i)}
                className={`flex ${
                  activeTab === i && "bg-secondary text-white"
                } cursor-pointer w-full border-2 rounded-md text-secondary border-secondary`}
              >
                <div className="text-xl text-center w-full font-[700] rounded-[8px] px-5 py-2">
                  {item.tab}
                </div>
              </div>
              {activeTab === i && (
                <div>
                  <div className="mobile:mt-5 mt-10">
                    <div>
                      <h1 className="text-xl text-secondary font-[600]">
                        {proposerData.tabs[activeTab]?.heading}
                      </h1>
                      <p className="text-quaternary">
                        {proposerData.tabs[activeTab]?.desc}
                      </p>
                      <div className="flex flex-wrap mobile:grid mobile:grid-cols-2 mobile:grid-rows-2 gap-2 mt-10 mobile:gap-4">
                        {proposerData.tabs[activeTab]?.btns?.map((item, i) => (
                          <button
                            className="w-[146.5px] mobile:w-full text-left ps-2 rounded-[8px] py-2 border-2 border-secondary"
                            key={i}
                          >
                            {item}
                          </button>
                        ))}
                      </div>
                      <div className="grid mobile:flex mobile:flex-wrap  grid-cols-2 grid-rows-2 gap-2 mobile:gap-5 mt-5">
                        {proposerData?.tabs[activeTab]?.fields?.map(
                          (item, i) => (
                            <div key={i} className="mobile:w-full">
                              {item !== "Dropdown" && item !== "Input File" && (
                                <input
                                  className="border-2 w-full mobile:w-full border-secondary px-5 py-2 rounded-[8px]"
                                  type="text"
                                  placeholder={item}
                                />
                              )}
                              {item === "Name" && (
                                <div className="mt-2 flex items-center gap-1 text-quaternary">
                                  <input type="checkbox" />
                                  <label>{`Don't have a last name.`}</label>
                                </div>
                              )}
                              {item === "PAN Card" && (
                                <div className="mt-2 flex items-center gap-1 text-quaternary">
                                  <input type="checkbox" />
                                  <label>{`I Don't have a PAN Card.`}</label>
                                </div>
                              )}

                              {item === "Dropdown" && (
                                <div className="text-quaternary">
                                  <select className="w-full mobile:w-full bg-white px-4 py-[9.2px] border-2 border-secondary rounded-[8px]">
                                    <option>Option 1</option>
                                    <option>Option 2</option>
                                    <option>Option 3</option>
                                  </select>
                                </div>
                              )}
                              <span>
                                {item === "Input File" && (
                                  <span>
                                    <input className="w-full" type="file" />
                                  </span>
                                )}
                              </span>
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}

          <div className="mobile:hidden">
            <Summary />
          </div>
        </div>
      </div>
      <ContinueBtn />
    </div>
  );
};

export default Step1;
