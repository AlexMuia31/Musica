import {
  AppBar,
  Box,
  IconButton,
  InputAdornment,
  Toolbar,
} from "@mui/material";
import React from "react";
import logo from "../../Assets/logo.svg";
import { CustomTextField } from "../TextBoxes/NavTextBox";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import Navdrawer from "./Navdrawer";

const Navbar = () => {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(!open);
  };

  return (
    <>
      <AppBar
        sx={{
          background: "#1D2123",
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
      >
        <Toolbar>
          <Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                sx={{ display: { xs: "none", md: "block" } }}
              >
                <MenuIcon />
              </IconButton>
              <Box>
                <img src={logo} alt="logo" width="50px" />
              </Box>
              <Box width="70%">
                <CustomTextField
                  fullWidth
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
                          <SearchIcon
                            sx={{ color: "rgba(255, 255, 255, 0.25)" }}
                          />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Navdrawer open={open} setOpen={setOpen} />
    </>
  );
};

export default Navbar;
