import React from 'react'
import './Searchbar.css';
import { TextField, Box, Button, ToggleButtonGroup, ToggleButton, Typography, Modal } from '@mui/material';
import ViewWeekIcon from '@mui/icons-material/ViewWeek';
import ViewListIcon from '@mui/icons-material/ViewList';
import Profilemodal from './Profilemodal';

export default function Searchbar() {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="searchBar">
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
      </Box>

      <TextField 
      id="outlined-basic" 
      label="Search" 
      variant="outlined" 
      className="searchBox" 
      />

      <Button 
      variant="outlined" 
      className="createProfileButton" 
      onClick={handleOpen}>Create profile</Button>

      <Profilemodal 
      handleOpen={handleOpen}
      handleClose={handleClose}
      open={open}
      />

      <ToggleButtonGroup
      exclusive
      aria-label="text alignment"
      >
        <ToggleButton value="left" 
        aria-label="left aligned"
        >
          <ViewWeekIcon />
        </ToggleButton>
        <ToggleButton 
        value="center" 
        aria-label="centered"
        >
          <ViewListIcon />
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  )
}
