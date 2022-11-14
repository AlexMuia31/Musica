import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import artist from "../../Assets/artist.svg";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import FavoriteIcon from "@mui/icons-material/Favorite";

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
          <Grid container color="#fff">
            <Grid item xs={12} md={6} pt="32px" pl="33px">
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
                  All mine, Lie again, Petty call me everyday, Out of time, No
                  love, Bad habit, and so much more
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
                >
                  33k Likes
                </Typography>
              </Box>
            </Grid>
            <Grid
              item
              md={6}
              sx={{
                display: { xs: "none", md: "flex" },
                overflow: "hidden",
                justifyContent: "flex-end",
              }}
            >
              <Box>
                <img src={artist} alt="" style={{}} />
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
          <Stack>
            <Box
              sx={{
                background: "#1A1E1F",
                height: { xs: "233px", md: "96px" },
                width: { md: "auto", xs: "323px" },
                borderRadius: "20px",
              }}
            ></Box>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LandingPage;
