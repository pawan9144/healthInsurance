import React from "react";

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex justify-center items-center">
      <div className="custom-container">{children}</div>
    </div>
  );
};

export default Container;
