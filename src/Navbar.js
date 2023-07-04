import { AppBar, Box, Toolbar, Typography, Button, Switch } from '@mui/material';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';


import React from 'react'

export default function Navbar() {

  const label = { inputProps: { 'aria-label': 'Switch demo' } };
  
  return (
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Viralnation
          </Typography>
          <LightModeIcon />
          <Switch {...label} color="primary" />
          <DarkModeIcon />
        </Toolbar>
      </AppBar>
  );
}
