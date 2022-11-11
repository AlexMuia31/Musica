import { Toolbar } from "@mui/material";
import React from "react";
import Navbar from "../Navbar/Navbar";

const Layout = ({ children }) => {
  return (
    <div>
      <div>
        <Navbar />
        <Toolbar />
      </div>
      <div>{children}</div>
    </div>
  );
};

export default Layout;
