import React from "react";
import PrimarySearchAppBar from "../components/PrimarySearchAppBar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <PrimarySearchAppBar  />
      {children}
    </div>
  );
};

export default Layout;
