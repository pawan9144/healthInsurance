import { createContext, useContext, useState } from "react";
import React from "react";

interface HomeStates {
  homeStates: {
    filterStates: {
      currentPopUp: {
        title: string;
        options: any;
      };
      showPopUp: boolean;
      showAllFilters: boolean;
      selectedOption: any;
      showCovers: boolean;
    };
  };
  setHomeStates: React.Dispatch<
    React.SetStateAction<{
      filterStates: {
        currentPopUp: {
          title: string;
          options: any;
        };
        showPopUp: boolean;
        showAllFilters: boolean;
        selectedOption: any;
        showCovers: boolean;
      };
    }>
  >;
}

const Context = createContext<HomeStates>({
  homeStates: {
    filterStates: {
      currentPopUp: {
        title: "",
        options: [],
      },
      showPopUp: false,
      showAllFilters: false,
      selectedOption: null,
      showCovers: false,
    },
  },
  setHomeStates: () => {},
});

const HomeStateContext = ({ children }: { children: React.ReactNode }) => {
  const [homeStates, setHomeStates] = useState({
    filterStates: {
      currentPopUp: {
        title: "",
        options: [],
      },
      showPopUp: false,
      showAllFilters: false,
      selectedOption: null,
      showCovers: false,
    },
  });

  const contextValues = { homeStates, setHomeStates };

  return (
    <div>
      <Context.Provider value={contextValues}>{children}</Context.Provider>
    </div>
  );
};

export const useHomeStateContext = () => useContext(Context);

export default HomeStateContext;
