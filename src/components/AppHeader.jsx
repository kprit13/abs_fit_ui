import * as React from "react";
import { styled, alpha, useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Logo from "../content/ABSOLUTE.png";
import useMediaQuery from "@mui/material/useMediaQuery";
import MenuIcon from "@mui/icons-material/Menu";
import { NavigationItems } from "../constants/NavItems";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import AddIcon from "@mui/icons-material/Add";
import {
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  Button,
  Divider,
  Typography,
  Menu,
  MenuItem,
  Popover,
  Collapse,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

const Search = styled("div")(({ theme }) => ({
  position: "absolute",
  left: "50%",
  transform: "translateX(-50%)",
  display: "flex",
  alignItems: "center",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.black, 0.25),
  },
  marginLeft: theme.spacing(2),
  width: "100%",
  [theme.breakpoints.up("xs")]: {
    marginLeft: 0,
    width: "350px",
  },
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
  [theme.breakpoints.up("md")]: {
    width: "400px", // Adjusted width for screens larger than 'sm'
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

export default function PrimarySearchAppBar() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [navIndex, setNavIndex] = React.useState(null);
  const open = Boolean(anchorEl);
  const isMobile = useMediaQuery("(max-width: 600px)");

  const handleClick = (event, index) => {
    if (navIndex === index) {
      setNavIndex(null);
      setAnchorEl(null);
    } else {
      setNavIndex(index);
      setAnchorEl(event.currentTarget);
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setNavIndex(null);
    setAnchorEl(null);
    setDrawerOpen(false);
  };

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleDrawerItemClick = (event, index) => {
    setNavIndex(index);
    setAnchorEl(event.currentTarget);
  };

  const theme = useTheme();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ bgcolor: "whitesmoke", top: 0 }}>
        <Container maxWidth="xl">
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            {isMobile ? (
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="open drawer"
                sx={{ mr: 2, alignItems: "left" }}
                onClick={() => handleDrawerOpen()}
              >
                <MenuIcon />
              </IconButton>
            ) : null}
            <Box
              component="img"
              sx={{
                height: 56,
                borderRadius: "50%",
                alignItems: "center",
              }}
              alt="Your logo."
              src={Logo}
            />
            {isMobile ? null : (
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search for Products..."
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
            )}
            {isMobile ? null : <Box sx={{ flexGrow: 1 }} />}
            <Box>
              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <Badge badgeContent={17} color="error">
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={"primary-search-account-menu"}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Divider />
      <AppBar position="fixed" sx={{ bgcolor: "white", top: "64px" }}>
        <Container maxWidth="xl">
          <Toolbar>
            {isMobile ? (
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search for Products..."
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
            ) : (
              <div>
                {NavigationItems.map((item, index) => (
                  <div
                    key={item.key}
                    style={{ display: "inline-block", margin: "0 8px" }}
                  >
                    <div>
                      <Button
                        id="nav-button"
                        aria-controls={open ? "nav-menu" : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? "true" : undefined}
                        variant="contained"
                        disableElevation
                        onClick={(event) => handleClick(event, index)}
                        endIcon={
                          navIndex === index ? (
                            <KeyboardArrowUpIcon />
                          ) : (
                            <KeyboardArrowDownIcon />
                          )
                        }
                        sx={{
                          backgroundColor: "#fff", // Replace 'yourColorHere' with the desired color
                          "&:hover": {
                            backgroundColor: "#f0f0f0", // Replace 'yourHoverColorHere' with the desired hover color
                          },
                        }}
                      >
                        {item.key}
                      </Button>
                      <StyledMenu
                        id="nav-sub-menu"
                        MenuListProps={{
                          "aria-labelledby": "nav-sub-button",
                        }}
                        anchorEl={anchorEl}
                        open={navIndex === index && open}
                        onClose={handleClose}
                      >
                        {navIndex === index &&
                          item.values &&
                          item.values.map((value) => {
                            return (
                              <MenuItem onClick={handleClose} disableRipple>
                                {value}
                              </MenuItem>
                            );
                          })}
                      </StyledMenu>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </Toolbar>
          <Drawer anchor="left" open={drawerOpen} onClose={handleDrawerClose}>
            <DrawerHeader sx={{ justifyContent: "space-around" }}>
              {drawerOpen && (
                <>
                  <Typography
                    size="md"
                    fontWeight="bold"
                    component="p"
                    color={"black"}
                  >
                    MENU
                  </Typography>
                  <IconButton color="black" onClick={handleDrawerClose}>
                    {theme.direction === "rtl" ? (
                      <ArrowForwardIcon />
                    ) : (
                      <ArrowBackIcon />
                    )}
                  </IconButton>
                </>
              )}
            </DrawerHeader>
            <Divider />
            <List
              sx={{
                width: "300px",
                maxWidth: 350,
                bgcolor: "background.paper",
              }}
            >
              {NavigationItems.map((item, index) => {
                return (
                  <>
                    <ListItemButton
                      key={index}
                      onClick={(event) => handleClick(event, index)}
                    >
                      <ListItemText primary={item.key} />
                      {navIndex === index ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse
                      in={navIndex === index}
                      timeout="auto"
                      unmountOnExit
                    >
                      <List component="div" disablePadding>
                        {item.values.map((value) => {
                          return (
                            <ListItemButton
                              key={value}
                              sx={{ pl: 4 }}
                              onClick={() => handleDrawerClose()}
                            >
                              <ListItemText primary={value} />
                            </ListItemButton>
                          );
                        })}
                      </List>
                    </Collapse>
                  </>
                );
              })}
            </List>
          </Drawer>
        </Container>
      </AppBar>
    </Box>
  );
}
