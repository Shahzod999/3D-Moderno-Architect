import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <h1>Dashboard 2</h1>
      {children}
    </div>
  );
};

export default Layout;
