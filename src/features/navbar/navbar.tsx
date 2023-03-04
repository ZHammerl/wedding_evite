import React from "react";
import { Container } from "@mui/system";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import "./navbar.scss";
import { Grid } from "@mui/material";

function Navbar({}) {
  return (
    <Grid columns={12} item container spacing={3}>
      <Grid item lg={2} md={2} xs={6}>
        <h1>logo</h1>
      </Grid>
      <Grid item lg={10} md={10} xs={6}>
        <BottomNavigation showLabels>
          <BottomNavigationAction label="Home" />
          <BottomNavigationAction label="Details" />
          <BottomNavigationAction label="Extra" />
          <BottomNavigationAction label="Contact" />
          <BottomNavigationAction label="RSVP" />
        </BottomNavigation>
      </Grid>
    </Grid>
  );
}

export default Navbar;
