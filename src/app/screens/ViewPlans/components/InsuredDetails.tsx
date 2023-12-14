import Container from "@/app/container/Container";
import { FILTER_PLANS } from "@/constants/reducerAction.contant";
import { StoreContext } from "@/context";
import React, { useContext } from "react";

const InsuredDetails = () => {
  const { dispatch } = useContext(StoreContext);


  const details = [
    {
      title: "Policy For",
      options: [
        {
          item: "Individual",
        },
        {
          item: "Family",
        },
      ],
    },
    {
      title: "Age",
      options: [
        {
          insurer: "Son",
          age: 17,
        },
        {
          insurer: "Father",
          age: 68,
        },
        {
          insurer: "Mother",
          age: 67,
        },
        {
          insurer: "Daughter",
          age: 15,
        },
        {
          insurer: "Son",
          age: 17,
        },
        {
          insurer: "Father",
          age: 68,
        },
        {
          insurer: "Mother",
          age: 67,
        },
        {
          insurer: "Daughter",
          age: 15,
        },
      ],
    },
    {
      title: "Plan Type",
      options: [
        {
          item: "Me",
        },
        {
          item: "Spouse",
        },
        {
          item: "Son",
        },
        {
          item: "Me",
        },
        {
          item: "Spouse",
        },
        {
          item: "Son",
        },
      ],
    },
    {
      title: "Pin Code",
      value: "382425",
    },
    {
      title: "Sum Insured",
      options: [
        {
          item: 5000,
        },
        {
          item: 10000,
        },
        {
          item: 15000,
        },
        {
          item: 5000,
        },
        {
          item: 10000,
        },
        {
          item: 15000,
        },
      ],
    },
  ];

  const onClickHandler = ({ item }: { item: any }) => {
    dispatch({
      type:FILTER_PLANS,
      payload: { 
        currentPopUp: {
          title: item.title,
          options: item.options,
        },
        showPopUp: true,        
    },
    })
  };

  return (
    <div>
      <Container>
        <div className="flex justify-between py-5 mobile:flex-col gap-2">
          {details?.map((item, i) => (
            <div key={i}>
              {item.title === "Pin Code" && (
                <div
                  style={{ boxShadow: "0 0 8px 0 rgba(0, 0, 0, 0.2)" }}
                  className="flex rounded-[4px] items-center"
                >
                  <label
                    className={`font-[600] ${
                      item.title === "Pin Code" ? "" : "cursor-pointer"
                    } bg-white w-[125px] mobile:w-full whitespace-nowrap rounded-[4px] rounded-e-none py-2 px-4`}
                  >
                    Pin Code:
                  </label>
                  <input
                    type="text"
                    className={`font-[600] rounded-s-none focus:outline-none ${
                      item.title === "Pin Code" ? "" : "cursor-pointer"
                    } bg-white w-[125px] mobile:w-full text-primary whitespace-nowrap rounded-[4px] py-2 px-4`}
                  />
                </div>
              )}

              {item.title === "Age" && (
                <div
                  onClick={() => onClickHandler({ item })}
                  style={{ boxShadow: "0 0 8px 0 rgba(0, 0, 0, 0.2)" }}
                  className={`font-[600] ${
                    item.title !== "Age" ? "" : "cursor-pointer"
                  } bg-white w-[250px] mobile:w-full whitespace-nowrap rounded-[4px] py-2 px-4`}
                >
                  {item.title}:{" "}
                  <span className="text-primary">{item.value}</span>
                </div>
              )}

              {item.title !== "Pin Code" && item.title !== "Age" && (
                <div
                  onClick={() => onClickHandler({ item })}
                  style={{ boxShadow: "0 0 8px 0 rgba(0, 0, 0, 0.2)" }}
                  className={`font-[600] ${
                    item.title === "Pin Code" ? "" : "cursor-pointer"
                  } bg-white w-[250px] mobile:w-full whitespace-nowrap rounded-[4px] py-2 px-4`}
                >
                  {item.title}:{" "}
                  <span className="text-primary">{item.value}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default InsuredDetails;
