import Container from "@/app/container/Container";
import { products } from "@/app/data/home/plans";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { TbFilter } from "react-icons/tb";
import { useHomeStateContext } from "../context/HomeStateContext";
import { RxCrossCircled } from "react-icons/rx";
import Modal from "@/app/shared/Modal";
import { BiSort } from "react-icons/bi";
import { ImCross } from "react-icons/im";

const Products = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("Cover");
  const [showHospitals, setShowHospitals] = useState(false);

  const [selectedPlans, setSelectedPlans] = useState<any>([]);

  const [showMorePlans, setShowMorePlans] = useState(false);

  const [currentPlanOpenedIndex, setCurrentPlanOpenedIndex] =
    useState<number>(0);

  const { homeStates, setHomeStates } = useHomeStateContext();

  const covers = [
    {
      title: "Cover",
      relationId: 1,
      type: "popup",
      options: [
        {
          item: "Recommended",
          relationId: 1,
        },
        {
          item: "Below Rs. 5 Lakh",
          relationId: 2,
        },
        {
          item: "Rs. 5 - 10 Lakh",
          relationId: 3,
        },
        {
          item: "Rs. 50 - 80 Lakh",
          relationId: 4,
        },
        {
          item: "Rs. 1 Crore",
          relationId: 4,
        },
      ],
    },
    {
      title: "Sort By",
      relationId: 2,
      type: "popup",
      options: [
        {
          item: "By relevance",
          relationId: 1,
        },
        {
          item: "Premium low to high",
          relationId: 2,
        },
        {
          item: "Highest claim settlement ratio",
          relationId: 3,
        },
        {
          item: "Cashless hospitals network",
          relationId: 4,
        },
      ],
    },
    {
      title: "Insurer",
      relationId: 3,
      type: "popup",
      options: [
        {
          img: "/assets/insurance-companies/niva.png",
          item: "Niva Bupa (formely known as Max Bupa)",
          relationId: 1,
        },
      ],
    },
    {
      title: "No Room Limit",
      type: "btn",
      relationId: 4,
    },
    {
      title: "Doctor Consultation and Pharmacy",
      type: "btn",
    },
    {
      title: "Discount",
      relationId: 5,
      type: "btn",
    },
  ];

  const searchByData = ["All", "RTO", "Pincode", "City", "State"];

  const companiesData = [
    {
      name: "ABC",
      address: "6391 Elgin St. Celina, Delaware 10299",
      contact: "(201) 555-0124",
    },
    {
      name: "ABC",
      address: "6391 Elgin St. Celina, Delaware 10299",
      contact: "(201) 555-0124",
    },
    {
      name: "ABC",
      address: "6391 Elgin St. Celina, Delaware 10299",
      contact: "(201) 555-0124",
    },
    {
      name: "ABC",
      address: "6391 Elgin St. Celina, Delaware 10299",
      contact: "(201) 555-0124",
    },
    {
      name: "ABC",
      address: "6391 Elgin St. Celina, Delaware 10299",
      contact: "(201) 555-0124",
    },
  ];

  const sortBy = {
    title: "Sort By",
    relationId: 2,
    type: "popup",
    options: [
      {
        item: "By relevance",
        relationId: 1,
      },
      {
        item: "Premium low to high",
        relationId: 2,
      },
      {
        item: "Highest claim settlement ratio",
        relationId: 3,
      },
      {
        item: "Cashless hospitals network",
        relationId: 4,
      },
    ],
  };

  return (
    <div className="mt-10">
      {selectedPlans?.length > 0 && (
        <div className="fixed w-full text-white bottom-0 bg-secondary py-2">
          <div className="flex w-full justify-center gap-5 items-center">
            <div className="flex mobile:flex-col mobile:gap-0 gap-5">
              {selectedPlans?.map((item: any, i: number) => (
                <div
                  key={i}
                  className="px-4 py-2 border-2 border-primary rounded-md"
                >
                  {item}
                </div>
              ))}
            </div>
            <div className="flex relative gap-5">
              <Link href="/compare-plans-detailed">
                <button className="bg-primary border-2 border-primary w-[155px] px-4 py-2 font-[600] text-white rounded-[8px]">
                  Compare Plans
                </button>
              </Link>
              <button
                onClick={() => {
                  setSelectedPlans(false);
                  setSelectedPlans([]);
                }}
                className="bg-red-500 mobile:hidden border-2 border-red-500 w-[155px] px-4 py-2 font-[600] text-white rounded-[8px]"
              >
                Close
              </button>
              <div
                onClick={() => {
                  setSelectedPlans(false);
                  setSelectedPlans([]);
                }}
                className="absolute desktop:hidden flex justify-end w-full mt-[-25px]"
              >
                <ImCross className="bg-red-500 border-2 border-white w-[30px] h-[30px] rounded-full p-[5px]" />
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="mobile:hidden">
        <div
          className={`transform overflow-y-auto z-[10] h-full w-[60%] fixed right-0 top-0 ease-in-out shadow-md transition duration-300 bg-white ${
            homeStates.filterStates.showCovers
              ? "translate-x-0"
              : "translate-x-[100%]"
          }`}
        >
          <div className="ps-5">
            <div className="flex my-[50px] justify-between">
              <h3 className="text-secondary mx-auto text-2xl font-[800] text-center">
                Additional Covers
              </h3>
              <RxCrossCircled
                size={27}
                className="cursor-pointer"
                onClick={() =>
                  setHomeStates((prevStates) => ({
                    ...prevStates,
                    filterStates: {
                      ...prevStates.filterStates,
                      showCovers: false,
                    },
                  }))
                }
              />
            </div>
            <div className="flex gap-10 w-full justify-between">
              <div className="flex flex-col gap-10">
                <h3 className="text-xl font-[700]">{activeTab}</h3>
                <div>
                  {covers
                    ?.filter((item: any, i: number) => activeTabIndex === i)
                    ?.map((item: any, i: number) => (
                      <div key={i} className="flex flex-wrap gap-5">
                        {item.options?.map((item2: any, j: number) => (
                          <div
                            key={j}
                            className={`px-6 min-w-[210px] max-w-full rounded-[6px] flex gap-3 py-2 border-2 border-quaternary`}
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
                <div className="mt-5 flex flex-wrap gap-10">
                  <button className="text-primary px-10 py-1 font-[600]">
                    Reset
                  </button>
                  <button className="bg-primary px-10 py-1 text-white font-[600] rounded-[10px]">
                    Apply
                  </button>
                </div>
              </div>
              <div className="bg-secondary h-screen rounded-tl-3xl text-white p-5 pe-0 ps-5">
                {covers?.map((item: any, i: number) => (
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
                          ? "bg-white text-secondary rounded-s-3xl"
                          : ""
                      } p-3 ps-10 w-[300px]`}
                    >
                      <span>{item.title}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`transform desktop:hidden overflow-y-auto w-full fixed left-0 top-0 ease-in-out h-full shadow-md transition duration-300 bg-white ${
          homeStates.filterStates.showCovers
            ? "translate-x-0"
            : "translate-x-[-100%]"
        }`}
      >
        <div className="mt-auto py-10">
          <div className="flex px-5 items-center py-[50px] justify-between">
            <h3 className="text-secondary mx-auto text-2xl font-[800] text-center">
              Additional Covers
            </h3>
            <RxCrossCircled
              size={27}
              className="cursor-pointer"
              onClick={() =>
                setHomeStates((prevStates) => ({
                  ...prevStates,
                  filterStates: {
                    ...prevStates.filterStates,
                    showCovers: false,
                  },
                }))
              }
            />
          </div>
          <div className="flex h-screen w-full flex-wrap items-center gap-10">
            <div className="bg-secondary flex flex-wrap text-white py-5 px-1 w-full">
              {covers?.map((item: any, i: number) => (
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
                {covers
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

      {showHospitals && (
        <div>
          <Modal
            isOpen={showHospitals}
            onClose={() => setShowHospitals(false)}
            title="Network Near by Hospitals"
          >
            <div className="py-5">
              <div className="flex mt-3 flex-wrap gap-5 items-center">
                <select className="w-[350px] mobile:w-full bg-white px-4 py-[9.2px] border-2 border-secondary rounded-[8px]">
                  {searchByData?.map((item, i) => (
                    <option key={i}>{item}</option>
                  ))}
                </select>
                <input
                  type="text"
                  placeholder="Enter Information"
                  className="w-[350px] mobile:w-full px-4 py-2 border-2 border-secondary rounded-[8px]"
                />
                <button className="text-white font-[600] bg-primary rounded-[8px] px-8 py-2 mobile:w-full">
                  Get Data
                </button>
              </div>
              <div className="mt-10 overflow-x-auto h-[300px] overflow-y-auto">
                <table
                  cellPadding={15}
                  className="w-full whitespace-nowrap bg-[#f6f6f6] rounded-[12px]"
                >
                  <thead className="rounded-[8px] bg-secondary p-2 font-[600] text-white">
                    <tr>
                      <td>Company Name</td>
                      <td>Address</td>
                      <td>Phone Number</td>
                    </tr>
                  </thead>
                  <tbody>
                    {companiesData?.map((item, i) => (
                      <tr key={i}>
                        <td>{item.name}</td>
                        <td>{item.address}</td>
                        <td>{item.contact}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </Modal>
        </div>
      )}

      <Container>
        <div className="flex flex-col gap-10">
          <span className="flex justify-end">
            <span
              onClick={() =>
                setHomeStates((prevStates: any) => ({
                  ...prevStates,
                  filterStates: {
                    ...prevStates.filterStates,
                    currentPopUp: {
                      title: sortBy?.title,
                      options: sortBy?.options,
                    },
                    showPopUp: true,
                  },
                }))
              }
              className="border-2 cursor-pointer flex rounded-md items-center px-3 py-2 gap-1 border-secondary"
            >
              <BiSort />
              <span>Sort by</span>
            </span>
          </span>
          {products?.map((item: any, i: number) => (
            <div key={i}>
              <div className="flex justify-between flex-wrap gap-10">
                <div className="flex mobile:mx-auto flex-col items-center bg-white h-full rounded-[16px]">
                  <Image
                    className="object-contain"
                    src={item.img}
                    width={200}
                    height={200}
                    alt={item.name}
                  />
                  {showMorePlans ? (
                    <div
                      onClick={() => {
                        setShowMorePlans(false);
                        setCurrentPlanOpenedIndex(i);
                      }}
                      className="flex cursor-pointer flex-col items-center my-3 gap-2"
                    >
                      <span className="text-tertiary">Hide Plans</span>
                      <IoIosArrowUp color="#36B37E" />
                    </div>
                  ) : (
                    <div
                      onClick={() => {
                        setShowMorePlans(true);
                      }}
                      className="flex cursor-pointer flex-col items-center my-3 gap-2"
                    >
                      <span className="text-tertiary">
                        {products[0]?.nestedPlans?.length} More Plans
                      </span>
                      <IoIosArrowDown color="#36B37E" />
                    </div>
                  )}
                </div>
                <div className="mobile:mx-auto">
                  <div className="flex gap-3 items-center">
                    <h1 className="text-secondary text-2xl font-[600]">
                      {item.name}
                    </h1>
                    <span className="text-tertiary font-[600] text-sm">
                      {item.discount}% Direct Discount
                    </span>
                  </div>
                  <div className="text-quaternary">
                    <div className="flex gap-2 items-center mt-5">
                      <input
                        className="mobile:hidden"
                        onChange={(e) => {
                          if (selectedPlans?.length > 3) {
                            return;
                          }

                          setSelectedPlans((prev: any) => [...prev, item.slug]);
                        }}
                        type="checkbox"
                      />
                      <input
                        className="desktop:hidden"
                        onChange={(e) => {
                          if (selectedPlans?.length > 1) {
                            return;
                          }

                          setSelectedPlans((prev: any) => [...prev, item.slug]);
                        }}
                        type="checkbox"
                      />
                      <label>Compare other plans</label>
                    </div>
                    <div className="grid grid-cols-2 grid-rows-2 gap-3 mt-5">
                      {item.features?.map((item2: any, j: number) => (
                        <div
                          key={j}
                          className="flex mobile:text-xs gap-3 items-center rounded-[6px] border px-3 py-1 border-quaternary"
                        >
                          <input type="radio" name="features" />
                          {item2.name}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="mobile:mx-auto">
                  <div className="flex gap-10">
                    <div>
                      <div>Cover amount</div>
                      <div className="font-[600]">{item.coverAmount}</div>
                    </div>
                    <div>
                      <div
                        onClick={() => setShowHospitals(true)}
                        className="flex cursor-pointer items-center gap-2"
                      >
                        <div>Cashless Hospitals</div>
                        <IoIosArrowDown />
                      </div>
                      <div className="font-[600]">{item.cashlessHospitals}</div>
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <div className="w-[200px] mt-10 bg-opacity-30 h-[2px] bg-quaternary" />
                  </div>
                  <div className="mt-10 flex flex-col gap-5">
                    <Link href="/review-plan">
                      <button className="bg-primary w-full rounded-[6px] py-1 text-white px-[20px] font-[600]">
                        Rs. {item.monthlyPrice} monthly
                      </button>
                    </Link>

                    <div>
                      <Link href={`/product/${item.slug}`}>
                        <button className="bg-secondary w-full py-1 text-white px-[110px] rounded-[6px]">
                          See details
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mobile:grid flex-wrap text-quaternary justify-between mobile:grid-cols-2 mobile:grid-rows-2 flex gap-3 mt-10">
                {item.cover?.map((item2: any, j: number) => (
                  <div key={j}>
                    <div className="flex min-w-[250px] mobile:min-w-full mobile:text-xs gap-3 items-center rounded-[6px] border px-3 py-1 mobile:py-3 border-quaternary">
                      <input type="radio" name="features" />
                      {item2.name}
                    </div>
                  </div>
                ))}

                <div
                  onClick={() => {
                    setHomeStates((prevStates) => ({
                      ...prevStates,
                      filterStates: {
                        ...prevStates.filterStates,
                        showCovers: true,
                      },
                    }));
                  }}
                  className="flex w-[250px] mobile:w-full mobile:py-3 cursor-pointer mobile:text-xs gap-3 items-center rounded-[6px] border px-3 py-1 border-quaternary"
                >
                  <TbFilter />
                  <span>All Covers</span>
                </div>
              </div>

              <div className="w-full my-10 bg-quaternary h-[1px] bg-opacity-[45%]" />
            </div>
          ))}
        </div>
        {showMorePlans && (
          <div>
            {products[currentPlanOpenedIndex]?.nestedPlans?.map(
              (item: any, i: number) => (
                <div key={i}>
                  <div className="flex justify-between flex-wrap gap-10">
                    <div className="flex mobile:mx-auto mobile:hidden flex-col items-center h-full rounded-[16px]">
                      <div className="w-[200px] h-[200px]" />
                    </div>
                    <div className="mobile:mx-auto">
                      <div className="flex gap-3 items-center">
                        <h1 className="text-secondary text-2xl font-[600]">
                          {item.name}
                        </h1>
                        <span className="text-tertiary font-[600] text-sm">
                          {item.discount}% Direct Discount
                        </span>
                      </div>
                      <div className="text-quaternary">
                        <div className="flex gap-2 items-center mt-5">
                          <input
                            className="mobile:hidden"
                            onChange={(e) => {
                              if (selectedPlans?.length > 3) {
                                return;
                              }

                              setSelectedPlans((prev: any) => [
                                ...prev,
                                item.slug,
                              ]);
                            }}
                            type="checkbox"
                          />
                          <input
                            className="desktop:hidden"
                            onChange={(e) => {
                              if (selectedPlans?.length > 1) {
                                return;
                              }

                              setSelectedPlans((prev: any) => [
                                ...prev,
                                item.slug,
                              ]);
                            }}
                            type="checkbox"
                          />
                          <label>Compare other plans</label>
                        </div>
                        <div className="grid grid-cols-2 grid-rows-2 gap-3 mt-5">
                          {item.features?.map((item2: any, j: number) => (
                            <div
                              key={j}
                              className="flex mobile:text-xs gap-3 items-center rounded-[6px] border px-3 py-1 border-quaternary"
                            >
                              <input type="radio" name="features" />
                              {item2.name}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="mobile:mx-auto">
                      <div className="flex gap-10">
                        <div>
                          <div>Cover amount</div>
                          <div className="font-[600]">{item.coverAmount}</div>
                        </div>
                        <div>
                          <div
                            onClick={() => setShowHospitals(true)}
                            className="flex cursor-pointer items-center gap-2"
                          >
                            <div>Cashless Hospitals</div>
                            <IoIosArrowDown />
                          </div>
                          <div className="font-[600]">
                            {item.cashlessHospitals}
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-center">
                        <div className="w-[200px] mt-10 bg-opacity-30 h-[2px] bg-quaternary" />
                      </div>
                      <div className="mt-10 flex flex-col gap-5">
                        <Link href="/review-plan">
                          <button className="bg-primary w-full rounded-[6px] py-1 text-white px-[20px] font-[600]">
                            Rs. {item.monthlyPrice} monthly
                          </button>
                        </Link>
                        <div>
                          <Link href={`/product/${item.slug}`}>
                            <button className="bg-secondary w-full py-1 text-white px-[110px] rounded-[6px]">
                              See details
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mobile:grid flex-wrap text-quaternary justify-between mobile:grid-cols-2 mobile:grid-rows-2 flex gap-3 mt-10">
                    {item.cover?.map((item2: any, j: number) => (
                      <div key={j}>
                        <div className="flex min-w-[250px] mobile:min-w-full mobile:text-xs gap-3 items-center rounded-[6px] border px-3 py-1 mobile:py-3 border-quaternary">
                          <input type="radio" name="features" />
                          {item2.name}
                        </div>
                      </div>
                    ))}

                    <div
                      onClick={() => {
                        setHomeStates((prevStates) => ({
                          ...prevStates,
                          filterStates: {
                            ...prevStates.filterStates,
                            showCovers: true,
                          },
                        }));
                      }}
                      className="flex w-[250px] mobile:w-full mobile:py-3 cursor-pointer mobile:text-xs gap-3 items-center rounded-[6px] border px-3 py-1 border-quaternary"
                    >
                      <TbFilter />
                      <span>All Covers</span>
                    </div>
                  </div>

                  <div className="w-full my-10 bg-quaternary h-[1px] bg-opacity-[45%]" />
                </div>
              )
            )}
          </div>
        )}
      </Container>
    </div>
  );
};

export default Products;
