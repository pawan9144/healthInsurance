import React from "react";
import DesktopFilters from "./components/DesktopFilters";
import MobileFilters from "./components/MobileFilters";
import { LuFilter } from "react-icons/lu";

const Filter = () => {
  const filters = [
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
    {
      title: "All Filters",
      icon: <LuFilter />,
      type: "btn",
    },
  ];

  return (
    <div>
      <DesktopFilters filters={filters} />
      <MobileFilters filters={filters} />
    </div>
  );
};

export default Filter;
