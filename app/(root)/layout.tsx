import React from "react";
import PrimarySearchAppBar from "../components/PrimarySearchAppBar";
import { Box } from "@mui/material";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <PrimarySearchAppBar />
      <Box mt={15}>
        {children}
      </Box>
    </div>
  );
};

export default Layout;
