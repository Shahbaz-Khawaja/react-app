import React from "react";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Appbar = (props) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton color="inherit">
          <MenuIcon />
        </IconButton>
        <Typography>Menu</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Appbar;
