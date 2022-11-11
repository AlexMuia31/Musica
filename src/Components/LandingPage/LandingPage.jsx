import { Box, Container, Grid } from "@mui/material";
import React from "react";

const LandingPage = () => {
  return (
    <Box sx={{ background: "#1D2123", minHeight: "100vh" }}>
      <Container maxWidth="xxl">
        <Grid container>
          <Grid item></Grid>
          <Grid item></Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default LandingPage;
