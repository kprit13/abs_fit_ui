import * as React from 'react';
import { styled, alpha, useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Logo from '../content/ABSOLUTE.png';
import useMediaQuery from '@mui/material/useMediaQuery';
import MenuIcon from '@mui/icons-material/Menu';
import { NavigationItems } from '../constants/NavItems';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  Button,
  Divider,
  Typography,
} from '@mui/material';

const Search = styled('div')(({ theme }) => ({
  position: 'absolute',
  left: '50%',
  transform: 'translateX(-50%)',
  display: 'flex',
  alignItems: 'center',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.black, 0.25),
  },
  marginLeft: theme.spacing(2),
  width: '100%',
  [theme.breakpoints.up('xs')]: {
    marginLeft: 0,
    width: '350px',
  },
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
  [theme.breakpoints.up('md')]: {
    width: '400px', // Adjusted width for screens larger than 'sm'
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

export default function PrimarySearchAppBar() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const isMobile = useMediaQuery('(max-width: 600px)');

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  const theme = useTheme();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static' sx={{ bgcolor: 'whitesmoke' }}>
        <Container maxWidth='xl'>
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
            {isMobile ? (
              <IconButton
                size='large'
                edge='start'
                color='inherit'
                aria-label='open drawer'
                sx={{ mr: 2, alignItems: 'left' }}
                onClick={() => handleDrawerOpen()}
              >
                <MenuIcon />
              </IconButton>
            ) : null}
            <Box
              component='img'
              sx={{
                height: 56,
                borderRadius: '50%',
                alignItems: 'center',
              }}
              alt='Your logo.'
              src={Logo}
            />
            {isMobile ? null : (
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder='Search for Products...'
                  inputProps={{ 'aria-label': 'search' }}
                />
              </Search>
            )}
            {isMobile ? null : <Box sx={{ flexGrow: 1 }} />}
            <Box>
              <IconButton
                size='large'
                aria-label='show 17 new notifications'
                color='inherit'
              >
                <Badge badgeContent={17} color='error'>
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>
              <IconButton
                size='large'
                edge='end'
                aria-label='account of current user'
                aria-controls={'primary-search-account-menu'}
                aria-haspopup='true'
                onClick={handleProfileMenuOpen}
                color='inherit'
              >
                <AccountCircle />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Divider />
      <AppBar position='static' sx={{ bgcolor: 'white' }}>
        <Container maxWidth='xl'>
          <Toolbar>
            {isMobile ? (
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder='Search for Products...'
                  inputProps={{ 'aria-label': 'search' }}
                />
              </Search>
            ) : (
              NavigationItems.map((item) => {
                return (
                  <Button color='inherit'>
                    {item.key}
                    {item.values && (
                      <IconButton
                        size='small'
                        edge='end'
                        color='inherit'
                        aria-controls='simple-menu'
                        aria-haspopup='true'
                      >
                        <ArrowDropDownIcon />
                      </IconButton>
                    )}
                  </Button>
                );
              })
            )}
          </Toolbar>
          <Drawer anchor='left' open={drawerOpen} onClose={handleDrawerClose}>
            <DrawerHeader sx={{ justifyContent: 'space-around' }}>
              {drawerOpen && (
                <>
                  <Typography
                    size='md'
                    fontWeight='bold'
                    component='p'
                    color={'black'}
                  >
                    MENU
                  </Typography>
                  <IconButton color='black' onClick={handleDrawerClose}>
                    {theme.direction === 'rtl' ? (
                      <ArrowForwardIcon />
                    ) : (
                      <ArrowBackIcon />
                    )}
                  </IconButton>
                </>
              )}
            </DrawerHeader>
            <Divider />
            <List>
              {NavigationItems.map((item, index) => (
                <ListItem button key={index} onClick={handleDrawerClose}>
                  {item.key}
                </ListItem>
              ))}
            </List>
          </Drawer>
        </Container>
      </AppBar>
    </Box>
  );
}
