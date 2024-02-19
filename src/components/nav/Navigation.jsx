import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  Button,
  Box,
  Hidden,
  Typography,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../../content/ABSOLUTE.png";
import UserProfile from "./UserProfile";
import MegaMenu from "./MegaMenu";
import MobileNavigationDrawer from "./MobileNavigationDrawer";
import { useTheme } from "@emotion/react";
import { Search, SearchIconWrapper, StyledInputBase } from "../Search";
import SearchIcon from "@mui/icons-material/Search";
import Container from "./Container";

const Navigation = () => {
  const drawerButtonRef = useRef(null);
  const theme = useTheme();
  const isMobile = useMediaQuery("(max-width: 600px)");

  return (
    <AppBar
      sx={{
        top: isMobile ? 56 : 64 /* Adjust this value */,
        zIndex: 999 /* Adjust the z-index */,
      }}
    >
      <Container>
        <Toolbar>
          <Hidden smDown>
            <MegaMenu />
          </Hidden>
          <Hidden mdUp>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search for Products..."
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </Hidden>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navigation;
