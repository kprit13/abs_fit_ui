import React from "react";
import { useState, useRef, useEffect } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import MegaMenu from './MegaMenu';
import {Typography} from '@mui/material'

const MobileNavigationDrawer = ({
  isDrawerOpen,
  setIsDrawerOpen,
  drawerButtonRef,
}) => {
  const [clicked, setClicked] = useState(null);
  const drawerRef = useRef(null);

  const handleToggle = (index) => {
    if (clicked === index) {
      return setClicked(null);
    }
    setClicked(index);
  };
  useEffect(() => {
    if (isDrawerOpen && drawerRef.current) {
      drawerRef.current.focus();
    }
  }, [isDrawerOpen]);

  const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      setIsDrawerOpen(false);
      if (drawerButtonRef.current) {
        drawerButtonRef.current.focus();
      }
    }
  };

  return (
    <div
      className='mobile_navigation'
      ref={drawerRef}
      tabIndex={isDrawerOpen ? 0 : -1}
      onKeyDown={handleKeyDown}
    >
      {isDrawerOpen && (
        <div className='backdrop' onClick={() => setIsDrawerOpen(false)}></div>
      )}

      <div className={`drawer_content ${isDrawerOpen ? 'active' : ''}`} sx={{justifyContent:'space-between'}}>
        <div className='close_drawer'>
          <button
            onClick={() => {
              setIsDrawerOpen(false);
              if (drawerButtonRef.current) {
                drawerButtonRef.current.focus();
              }
            }}
          >
            <CloseIcon/>
          </button>
        </div>
        <div>
          <MegaMenu
            handleToggle={handleToggle}
            clicked={clicked}
            setIsDrawerOpen={setIsDrawerOpen}
          />
        </div>
      </div>
    </div>
  );
};

export default MobileNavigationDrawer;
