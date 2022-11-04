import {
  AppBar,
  Box,
  Container,
  IconButton,
  InputAdornment,
  Toolbar,
} from "@mui/material";
import React from "react";
import logo from "../../Assets/logo.svg";
import { CustomTextField } from "../TextBoxes/NavTextBox";
import SearchIcon from "@mui/icons-material/Search";

const Navbar = () => {
  return (
    <AppBar sx={{ background: "#1D2123" }}>
      <Toolbar>
        <Container maxWidth="xxl">
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <img src={logo} alt="logo" width="50px" />
            <CustomTextField
              placeholder="Search artists"
              size="small"
              inputProps={{
                sx: {
                  "&::placeholder": {
                    color: "rgba(255, 255, 255, 0.25)",
                    fontWeight: 600,
                    fontSize: "14px",
                  },
                  color: "#fff",
                },
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="end">
                    <IconButton type="submit">
                      <SearchIcon sx={{ color: "rgba(255, 255, 255, 0.25)" }} />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Box>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
