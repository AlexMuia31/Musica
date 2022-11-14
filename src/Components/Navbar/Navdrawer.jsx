import React from "react";
import MuiDrawer from "@mui/material/Drawer";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import home from "../../Assets/home.svg";
import music from "../../Assets/music.svg";
import radio from "../../Assets/radio.svg";
import video from "../../Assets/video.svg";
import frame from "../../Assets/frame.svg";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const Navdrawer = ({ open, setOpen }) => {
  const theme = useTheme();

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <Drawer
      variant="permanent"
      open={open}
      sx={{
        "	.MuiDrawer-paper": {
          background: "#1D2123",
        },
        display: { xs: "none", md: "block" },
      }}
    >
      <List sx={{ mt: "96px" }}>
        <ListItem disablePadding sx={{ display: "block" }}>
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              <img src={home} alt="" />
            </ListItemIcon>
            <ListItemText
              sx={{ opacity: open ? 1 : 0, color: "#fff", fontWeight: 700 }}
            >
              Home
            </ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding sx={{ display: "block" }}>
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              <img src={music} alt="" />
            </ListItemIcon>
            <ListItemText
              sx={{ opacity: open ? 1 : 0, color: "#fff", fontWeight: 700 }}
            >
              My collections
            </ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding sx={{ display: "block" }}>
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              <img src={radio} alt="" width="22px" height="22px" />
            </ListItemIcon>
            <ListItemText
              sx={{ opacity: open ? 1 : 0, color: "#fff", fontWeight: 700 }}
            >
              Radio
            </ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding sx={{ display: "block" }}>
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              <img src={video} alt="" width="22px" height="22px" />
            </ListItemIcon>
            <ListItemText
              sx={{ opacity: open ? 1 : 0, color: "#fff", fontWeight: 700 }}
            >
              Music Videos
            </ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding sx={{ display: "block" }}>
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              <img src={frame} alt="" width="22px" height="22px" />
            </ListItemIcon>
            <ListItemText
              sx={{ opacity: open ? 1 : 0, color: "#fff", fontWeight: 700 }}
            >
              Profile
            </ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Navdrawer;
