import Container from "@/app/container/Container";
import { products } from "@/app/data/home/plans";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ReviewPlan = () => {
  const product = products?.find((item) => item.slug === "care-supreme-direct");

  return (
    <div className="py-10">
      <Container>
        <div className="flex flex-wrap gap-10 mobile:flex-col justify-between">
          <div>
            <div className="flex items-center gap-10 shadow-md p-5 rounded-[12px]">
              <Image
                src={`${product?.img}`}
                className="w-[150px] mobile:w-[100px] mobile:h-[100px] h-[150px] object-contain"
                width={200}
                height={200}
                alt="Image"
              />
              <h3 className="text-xl text-secondary font-[600]">
                {product?.name}
              </h3>
            </div>
            <div className="shadow-md mt-10 p-5 rounded-[12px]">
              <h3 className="text-xl font-[600] text-secondary">
                Cover Amount
              </h3>
              <p className="text-xs text-quaternary">
                Medical treatments are getting costlier every year. Higher the
                cover better it is.
              </p>

              <select className="w-[300px] mobile:w-full  border-2 rounded-[8px] mt-5 bg-white border-secondary ps-3 px-10 py-2">
                <option value={product?.coverAmount}>
                  Rs. {product?.coverAmount}
                </option>
              </select>
            </div>
            <div className="mt-10 shadow-md p-5 rounded-[12px]">
              <h3 className="text-xl font-[600] text-secondary">
                Policy Period
              </h3>
              <p className="text-xs text-quaternary">
                Policy Period Choosing a multi-year plan saves your money and
                the trouble of remembering yearly renewals.
              </p>
              <div className="flex flex-wrap mobile:gap-5 items-center justify-between mt-5">
                {product?.policyPeriod?.map((item, i) => (
                  <div
                    key={i}
                    className="border-2 mobile:w-full px-5 py-2 rounded-[8px] border-secondary flex items-center gap-2"
                  >
                    <input type="radio" name="policy period" />
                    <label>
                      {item.duration} Year @{" "}
                      <span className="font-[600]">Rs. {item.cost}</span>
                    </label>
                  </div>
                ))}
              </div>
              <div className="text-xs mt-5">
                Easy EMI options starting from ₹822/month.{" "}
                <span className="text-primary">View details ›</span>
              </div>
            </div>
            <div className="mt-10 shadow-md p-5 rounded-[12px]">
              <h3 className="text-2xl font-[600] text-secondary">Discounts</h3>
              <p className="text-md mt-5 text-quaternary">
                With some smart trade offs you can save big on your premium.
              </p>
              <div className="p-5 flex gap-10 mobile:gap-0 mobile:flex-col items-center justify-between border-2 border-secondary rounded-[8px] mt-5">
                <div>
                  <h3 className="text-xl font-[600] text-secondary">
                    Medical Practitioner Discount
                  </h3>
                  <p className="text-sm mt-5 text-quaternary">
                    Get 5% discount if any of the insured person is a medical
                    practitioner
                  </p>
                </div>
                <div className="flex items-center mobile:mt-4 gap-10">
                  <div className="flex flex-col">
                    <span className="text-primary text-opacity-70">
                      You Save
                    </span>
                    <span className="text-primary font-[700]">Rs. 459</span>
                  </div>
                  <button className="font-[600] px-4 py-1 text-secondary border-2 border-secondary rounded-[8px]">
                    Apply
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-10 shadow-md p-5 rounded-[12px]">
              <div>
                <h3 className="text-2xl font-[600] text-secondary">Add Ons</h3>
                <p className="text-md mt-5 font-[600]">
                  Riders You should get these additional benefits to enhance
                  your current plan
                </p>
                <div className="flex flex-col gap-10 mt-10">
                  {product?.additionalBenifits?.map((item, i) => (
                    <div
                      key={i}
                      className="p-5 border-2 rounded-[8px] border-secondary"
                    >
                      <div className="absolute mt-[-35px]">
                        <label className="bg-secondary text-lg text-white px-5 py-2 rounded-[8px]">
                          Select any 1 of 2
                        </label>
                      </div>
                      <div>
                        {item.details?.map((item2, j) => (
                          <div key={j}>
                            <div className="flex mobile:flex-col items-center justify-between">
                              <div className="py-5 flex flex-col gap-5">
                                <span className="text-xl text-secondary font-[600]">
                                  {item2.name}
                                </span>
                                {item2.points?.map((item3, k) => (
                                  <div
                                    key={k}
                                    className="w-[400px] mobile:flex-col flex gap-2 mobile:w-full"
                                  >
                                    <span>•&nbsp;{item3.point}</span>
                                  </div>
                                ))}
                              </div>
                              <div className="flex items-center gap-10">
                                <div className="flex flex-col gap-1">
                                  <span className="text-quaternary">
                                    Premium
                                  </span>
                                  <span className="font-[600]">
                                    Rs. {item2.price}
                                  </span>
                                </div>
                                <button className="font-[600] px-4 py-1 text-secondary border-2 border-secondary rounded-[8px]">
                                  + Add
                                </button>
                              </div>
                            </div>
                            {j < item.details?.length - 1 && (
                              <div className="pt-10">
                                <div className="h-[1px] w-full bg-quaternary" />
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-10">
                <h3 className="text-2xl font-[600] text-secondary">Riders</h3>
                <p className="text-md mt-5 font-[600]">
                  Riders You should get these additional benefits to enhance
                  your current plan
                </p>
                <div className="flex flex-col gap-10 mt-10">
                  {product?.additionalBenifits?.map((item, i) => (
                    <div
                      key={i}
                      className="p-5 border-2 rounded-[8px] border-secondary"
                    >
                      <div className="absolute mt-[-35px]">
                        <label className="bg-secondary text-lg text-white px-5 py-2 rounded-[8px]">
                          Select any 1 of 2
                        </label>
                      </div>
                      <div>
                        {item.details?.map((item2, j) => (
                          <div key={j}>
                            <div className="flex mobile:flex-col items-center justify-between">
                              <div className="py-5 flex flex-col gap-5">
                                <span className="text-xl text-secondary font-[600]">
                                  {item2.name}
                                </span>
                                {item2.points?.map((item3, k) => (
                                  <div
                                    key={k}
                                    className="w-[400px] mobile:flex-col flex gap-2 mobile:w-full"
                                  >
                                    <Image
                                      src={item3.image}
                                      width={50}
                                      height={50}
                                      className="w-[50px] h-[20px] object-contain"
                                      alt=""
                                    />
                                    <span>•&nbsp;{item3.point}</span>
                                  </div>
                                ))}
                              </div>
                              <div className="flex items-center gap-10">
                                <div className="flex flex-col gap-1">
                                  <span className="text-quaternary">
                                    Premium
                                  </span>
                                  <span className="font-[600]">
                                    Rs. {item2.price}
                                  </span>
                                </div>
                                <button className="font-[600] px-4 py-1 text-secondary border-2 border-secondary rounded-[8px]">
                                  + Add
                                </button>
                              </div>
                            </div>
                            {j < item.details?.length - 1 && (
                              <div className="pt-10">
                                <div className="h-[1px] w-full bg-quaternary" />
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-10">
                <div className="flex flex-col gap-10 mt-10">
                  {product?.additionalBenifits?.map((item, i) => (
                    <div
                      key={i}
                      className="p-5 border-2 rounded-[8px] border-secondary"
                    >
                      <div className="absolute mt-[-35px]">
                        <label className="bg-secondary text-lg text-white px-5 py-2 rounded-[8px]">
                          Select any 1 of 2
                        </label>
                      </div>
                      <div>
                        {item.details?.map((item2, j) => (
                          <div key={j}>
                            <div className="flex mobile:flex-col items-center justify-between">
                              <div className="py-5 flex flex-col gap-5">
                                <span className="text-xl text-secondary font-[600]">
                                  {item2.name}
                                </span>
                                {item2.points?.map((item3, k) => (
                                  <div
                                    key={k}
                                    className="w-[400px] mobile:flex-col flex gap-2 mobile:w-full"
                                  >
                                    <Image
                                      src={item3.image}
                                      width={50}
                                      height={50}
                                      className="w-[50px] h-[20px] object-contain"
                                      alt=""
                                    />
                                    <span>•&nbsp;{item3.point}</span>
                                  </div>
                                ))}
                              </div>
                              <div className="flex items-center gap-10">
                                <div className="flex flex-col gap-1">
                                  <span className="text-quaternary">
                                    Premium
                                  </span>
                                  <span className="font-[600]">
                                    Rs. {item2.price}
                                  </span>
                                </div>
                                <button className="font-[600] px-4 py-1 text-secondary border-2 border-secondary rounded-[8px]">
                                  + Add
                                </button>
                              </div>
                            </div>
                            {j < item.details?.length - 1 && (
                              <div className="pt-10">
                                <div className="h-[1px] w-full bg-quaternary" />
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="shadow-md p-5">
              <div>
                <div className="flex justify-between items-center gap-5">
                  <h3 className="text-secondary text-xl font-[600]">Summary</h3>
                  <Image
                    src={`${product?.img}`}
                    className="w-[50px] h-[50px] object-contain"
                    width={50}
                    height={50}
                    alt="Image"
                  />
                </div>
                <div className="h-[1px] w-full bg-quaternary" />
              </div>
              <div className="flex justify-between mt-5">
                <span>Base Premium - 1 year</span>
                <span className="font-[600]">Rs. 9,188</span>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <Image
                  src={`${product?.img}`}
                  className="w-[30px] h-[30px] object-contain"
                  width={30}
                  height={30}
                  alt="Image"
                />
                <h3 className="text-secondary text-sm font-[600]">
                  Select Rider(s)
                </h3>
              </div>
              <select className="w-[300px] mobile:w-full  border-2 rounded-[8px] mt-2 bg-white border-secondary ps-3 px-10 py-2">
                <option>Missing out on benefits</option>
              </select>
              <div className="flex items-center gap-2 mt-2">
                <Image
                  src={`${product?.img}`}
                  className="w-[30px] h-[30px] object-contain"
                  width={30}
                  height={30}
                  alt="Image"
                />
                <h3 className="text-secondary text-sm font-[600]">
                  Select Add-ons
                </h3>
              </div>
              <select className="w-[300px] mobile:w-full  border-2 rounded-[8px] mt-2 bg-white border-secondary ps-3 px-10 py-2">
                <option>No add-ons selected</option>
              </select>
              <div className="pt-5 pb-2">
                <div className="h-[1px] w-full bg-quaternary opacity-50" />
              </div>
              <div className="mt-4 text-lg font-[600] flex justify-between items-center">
                <span>Total Premium</span>
                <span>Rs. 9189/-</span>
              </div>
              <Link href="/proposer-details">
                <button className="w-full px-5 font-[600] py-2 text-white bg-primary rounded-[8px] mt-5">
                  Proceed to Proposal
                </button>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ReviewPlan;
