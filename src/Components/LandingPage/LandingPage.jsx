import {
  Box,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import artist from "../../Assets/artist.svg";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import FavoriteIcon from "@mui/icons-material/Favorite";
import rectangle from "../../Assets/Rectangle17.svg";
import vector from "../../Assets/Vector.svg";
import vector2 from "../../Assets/Vector2.svg";

const LandingPage = () => {
  return (
    <Box sx={{}}>
      <Grid container gap={4}>
        <Grid
          item
          xs={12}
          md={7}
          sx={{
            backgroundColor: "#609EAF",
            height: { md: "373px", xs: "503px" },
            borderRadius: "40px",
          }}
        >
          <Grid container color="#fff" sx={{ position: "relative" }}>
            <Grid item xs={12} md={6} pt="32px" pl="33px">
              <Box sx={{ position: "relative" }}>
                <Box>
                  <Box>
                    <Typography
                      fontSize="12px"
                      fontWeight={400}
                      lineHeight="14.4px"
                      fontFamily="quicksand"
                    >
                      Currated playlist
                    </Typography>
                    <Typography
                      fontSize="35px"
                      fontWeight={700}
                      lineHeight="42px"
                      mt={{ md: "78px", xs: "236px" }}
                      fontFamily="quicksand"
                    >
                      R & B Hits
                    </Typography>
                    <Typography
                      fontSize="14px"
                      fontFamily="quicksand"
                      lineHeight="17px"
                      fontWeight={400}
                      mt="6px"
                      pr="1%"
                    >
                      All mine, Lie again, Petty call me everyday, Out of time,
                      No love, Bad habit, and so much more
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      mt: { md: "76px", xs: "46px" },
                      alignItems: "center",
                    }}
                  >
                    <AvatarGroup spacing="small">
                      <Avatar
                        alt="Remy Sharp"
                        src=""
                        sx={{ height: "34px", width: "34px" }}
                      />
                      <Avatar
                        alt="Travis Howard"
                        src=""
                        sx={{ height: "34px", width: "34px" }}
                      />
                      <Avatar
                        alt="Cindy Baker"
                        src=""
                        sx={{ height: "34px", width: "34px" }}
                      />
                      <Avatar
                        alt="Agnes Walker"
                        src=""
                        sx={{ height: "34px", width: "34px" }}
                      />
                      <Avatar
                        alt="Trevor Henderson"
                        sx={{ height: "34px", width: "34px" }}
                      />
                    </AvatarGroup>
                    <FavoriteIcon
                      sx={{ width: "23px", height: "22px", ml: "21px" }}
                    />
                    <Typography
                      fontWeight={400}
                      fontFamily="quicksand"
                      fontSize={{ xs: "24px", md: "14px" }}
                      ml="10px"
                      sx={{ whiteSpace: "nowrap" }}
                    >
                      33k Likes
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid
              item
              md={12}
              sx={{
                display: { xs: "none", md: "flex" },
                overflow: "hidden",
                justifyContent: "flex-end",
                position: "absolute",
                top: 0,
                right: 0,
                borderRadius: "40px",
              }}
            >
              <Box>
                <img src={vector} alt="" />
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                position: "absolute",
                zIndex: 10,
                top: 0,
                right: 0,
              }}
            >
              <Box sx={{ display: { xs: "none", md: "flex" } }}>
                <img src={artist} alt="" />
              </Box>
              <Box
                sx={{
                  display: { xs: "flex", md: "none" },
                }}
              >
                <img src={vector2} alt="" />
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={4.5}>
          <Typography
            color="#fff"
            fontSize={{ md: "24px", xs: "20px" }}
            lineHeight={{ xs: "24px", md: "29px" }}
            fontWeight={700}
            fontFamily="quicksand"
          >
            Top charts
          </Typography>
          <Stack sx={{ mt: "14px" }}>
            <Box
              sx={{
                background: "#1A1E1F",
                height: { xs: "96px" },
                width: { xs: "auto" },
                borderRadius: "20px",
                padding: "",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Grid container gap={2}>
                <Grid item md={8} xs={12}>
                  <Grid container gap={1}>
                    <List>
                      <ListItem alignItems="center">
                        <ListItemAvatar>
                          <Avatar
                            src={rectangle}
                            variant="square"
                            sx={{
                              width: "63px",
                              height: "63px",
                              mr: "14px",
                            }}
                          />
                        </ListItemAvatar>
                        <ListItemText
                          primary={
                            <Typography
                              color="#fff"
                              sx={{ whiteSpace: "nowrap" }}
                            >
                              Golden age of 80s
                            </Typography>
                          }
                          secondary={
                            <Box>
                              <Typography color="#fff">Sean swadder</Typography>
                              <Typography color="#fff">2:34:45</Typography>
                            </Box>
                          }
                        />
                      </ListItem>
                    </List>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LandingPage;
