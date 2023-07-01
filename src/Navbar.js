import './Navbar.css';
import { AppBar, Box, Toolbar, Typography, Button } from '@mui/material';

import React from 'react'

export default function Navbar() {
  return (
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Viralnation
          </Typography>
        </Toolbar>
      </AppBar>
  );
}
