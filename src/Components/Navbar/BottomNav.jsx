import React from "react";
import Paper from "@mui/material/Paper";
import BottomNavigation from "@mui/material/BottomNavigation";
import { Typography } from "@mui/material";

const BottomNav = () => {
  return (
    <Paper
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        background: "transparent",
        zIndex: (theme) => theme.zIndex.drawer + 1,
        height: "100px",
      }}
      elevation={3}
    >
      <BottomNavigation
        sx={{
          filter: "drop-shadow(0px -25px 100px rgba(16, 16, 16, 0.51))",
          background: "rgba(51, 55, 59, 0.37)",
          backdropFilter: "blur(5px)",
          height: "100px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Typography>
          {" "}
          test test test test test test test test test test test test test test
          test test test test test test test test test test test test test test
        </Typography>
      </BottomNavigation>
    </Paper>
  );
};

export default BottomNav;
