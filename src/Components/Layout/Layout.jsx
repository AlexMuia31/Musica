import { Box, CssBaseline } from "@mui/material";
import React from "react";
import BottomNav from "../Navbar/BottomNav";
import Navbar from "../Navbar/Navbar";

const Layout = ({ children }) => {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Navbar />
      <BottomNav />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          pt: 10,
          background: "#1D2123",
          minHeight: "100vh",
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
