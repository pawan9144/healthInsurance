import Container from "@/app/container/Container";
import React from "react";
import Plans from "./components/Plans";
import { compariableDataDetailed, products } from "@/app/data/home/plans";

const ComparePlansDetailed = () => {
  return (
    <div className="bg-[#f4f5f7] pb-[250px]">
      <Container>
        <Plans />

        {compariableDataDetailed?.map((item3, k) => (
          <div key={k}>
            <div className="bg-quaternary my-[25px] h-[1px] w-full opacity-25" />
            <div>
              <div className="flex w-full items-center justify-start gap-20">
                <div className="flex items-center mobile:flex-wrap gap-[60px] mobile:gap-5 w-full">
                  <div className="w-[190px] mobile:w-full">
                    <h3 className="text-secondary font-[600]">{item3.name}</h3>
                    <p className="text-quaternary text-xs">{item3.desc}</p>
                  </div>
                  {products?.map((item, i) => (
                    <div key={i}>
                      <div>
                        {item.slug === "care-supreme-direct" && (
                          <div className="flex flex-wrap gap-10 mobile:gap-2">
                            {item.features?.map((item2, j) => (
                              <div key={j} className="flex relative flex-col flex-wrap gap-10 mobile:gap-5">
                                <div className="shadow-md w-[250px] mobile:w-full flex flex-col text-quaternary text-xs bg-white rounded-xl px-5 py-3">
                                  {item2.option.content}
                                  <span className="text-tertiary">
                                    Best in the comparison
                                  </span>
                                </div>
                                {item3.buyNowBtn && (
                                  <div className="absolute flex flex-col justify-end items-end w-full h-[250px] mobile:h-[200px]">
                                    <button className="bg-primary w-[250px] mobile:w-full px-4 py-2 rounded-md text-white font-[600]">
                                      Buy Now
                                    </button>
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </Container>
    </div>
  );
};

export default ComparePlansDetailed;
