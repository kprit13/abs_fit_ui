// NavigationBar.js
import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Container, Drawer, IconButton, List, ListItem } from '@mui/material';
import { NavigationItems } from '../constants/NavItems';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import MenuIcon from '@mui/icons-material/Menu';
import useMediaQuery from '@mui/material/useMediaQuery';

const NavigationBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
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
  return (
    <AppBar position='static' sx={{ bgcolor: 'white' }}>
      <Container maxWidth='xl'>
        <Toolbar>
          {isMobile ? (
            <IconButton
              size='large'
              edge='start'
              color='inherit'
              aria-label='open drawer'
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
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
        <Drawer anchor='left' open={false} onClose={handleDrawerClose}>
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
  );
};

export default NavigationBar;
