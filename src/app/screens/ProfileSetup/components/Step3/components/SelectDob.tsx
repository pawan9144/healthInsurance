import React from "react";

const SelectDob = () => {
  const data = [
    {
      insurer: "Self",
    },
    {
      insurer: "Spouse",
    },
    {
      insurer: "Son",
    },
    {
      insurer: "Daughter",
    },
  ];

  const [selectedBtn, setSelectedBtn] = React.useState<number>();

  return (
    <div className="mt-5">
      <div className="flex mobile:grid mobile:grid-cols-2 mt-10 items-center gap-10 mobile:gap-5">
        {data?.map((item: any, i: number) => (
          <button
            onClick={() => setSelectedBtn(i)}
            className={`border-2 ${
              selectedBtn === i && "bg-secondary text-white"
            } text-left mobile:w-full justify-between flex items-center text-secondary w-full py-2 px-3 border-secondary rounded-[6px]`}
            key={i}
          >
            <span>{item.insurer}</span>

            <span>
              <label>{`1990-10-21`}</label>
            </span>
          </button>
        ))}
      </div>
      <input
        onFocus={(e) => (e.currentTarget.type = "date")}
        type="text"
        className="px-5 mt-10 w-[290px] mobile:w-full py-2 border-2 border-secondary rounded-[8px]"
        id="dateInput"
        placeholder="Date of Birth"
      />
    </div>
  );
};

export default SelectDob;
