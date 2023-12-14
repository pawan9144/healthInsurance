import { Metadata } from "next";
import React, { Suspense } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

export const metadata: Metadata = {
  title: "Health Insurance",
  description: "Health Insurance Web App",
};

const CustomLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default CustomLayout;
