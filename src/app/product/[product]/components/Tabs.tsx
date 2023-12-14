import React, { useState } from "react";

const Tabs = ({ data }: { data: any }) => {
  const [activeTab, setActiveTab] = useState<any>(0);

  return (
    <div>
      <div className="mobile:hidden">
        <div className="w-full shadow-md p-5 rounded-[12px] mt-10 flex mobile:flex-col">
          <div className="flex mobile:overflow-x-auto whitespace-nowrap mt-10 desktop:flex-col">
            {data?.details?.tabs.map((item: any, i: number) => (
              <div key={i} className="py-2 pe-10 w-full">
                <button
                  key={i}
                  className={`${
                    activeTab === i
                      ? "bg-secondary text-white"
                      : "hover:bg-secondary hover:text-white"
                  } py-2 px-4 text-2xl w-full font-[800] text-secondary rounded-[5px]`}
                  onClick={() => setActiveTab(i)}
                >
                  {item.title}
                </button>
              </div>
            ))}
          </div>
          <div className="py-3 px-2 w-full mt-10">
            {data?.details?.tabs.map((item: any, i: any) => (
              <div key={i}>
                {activeTab === i && (
                  <div className="flex mobile:flex-wrap justify-between">
                    <div className="pe-5 w-full">
                      <h2 className="font-[700] text-xl text-secondary">
                        {item.col1.heading}
                      </h2>
                      <div className="mt-5">
                        {item.col1.points.map((item2: any, j: any) => (
                          <div
                            key={j}
                            className="flex p-1 flex-wrap justify-between"
                          >
                            <span className="font-[600]">{item2.key}</span>
                            <span>{item2.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="max-h-full w-[3px] bg-primary" />
                    <div className="ps-5 mobile:ps-0 mobile:mt-5 w-full">
                      <h2 className="font-[700] text-xl text-secondary">
                        {item.col2.heading}
                      </h2>
                      <div className="mt-5">
                        {item.col2.points.map((item2: any, j: any) => (
                          <div
                            key={j}
                            className="flex p-1 flex-wrap justify-between"
                          >
                            <span className="font-[600]">{item2.key}</span>
                            <span>{item2.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="desktop:hidden">
        <div className="w-full shadow-md p-5 rounded-[12px] mt-10">
          {data?.details?.tabs.map((item: any, i: number) => (
            <div key={i} className="py-2">
              <button
                className={`${
                  activeTab === i
                    ? "bg-secondary text-white"
                    : "hover:bg-secondary hover:text-white"
                } py-2 px-4 text-2xl w-full font-[800] text-secondary rounded-[5px]`}
                onClick={() => setActiveTab(activeTab === i ? null : i)}
              >
                {item.title}
              </button>
              {activeTab === i && (
                <div className="flex mobile:flex-wrap justify-between mt-10">
                  <div className="pe-5 w-full">
                    <h2 className="font-[700] text-xl text-secondary">
                      {item.col1.heading}
                    </h2>
                    <div className="mt-3">
                      {item.col1.points.map((item2: any, j: number) => (
                        <div
                          key={j}
                          className="flex p-1 flex-wrap justify-between"
                        >
                          <span className="font-[600]">{item2.key}</span>
                          <span>{item2.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="max-h-full w-[3px] bg-primary" />
                  <div className="ps-5 mobile:ps-0 mobile:mt-5 w-full">
                    <h2 className="font-[700] text-xl text-secondary">
                      {item.col2.heading}
                    </h2>
                    <div className="mt-3">
                      {item.col2.points.map((item2: any, j: number) => (
                        <div
                          key={j}
                          className="flex p-1 flex-wrap justify-between"
                        >
                          <span className="font-[600]">{item2.key}</span>
                          <span>{item2.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tabs;
