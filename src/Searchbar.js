import React from 'react'
import './Searchbar.css';
import { TextField, Box, Button, ToggleButtonGroup, ToggleButton } from '@mui/material';
import ViewWeekIcon from '@mui/icons-material/ViewWeek';
import ViewListIcon from '@mui/icons-material/ViewList';

export default function Searchbar() {

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
        <TextField id="outlined-basic" label="Search" variant="outlined" className="searchBox" />
        <Button variant="outlined" className="createProfileButton">Create profile</Button>

      <ToggleButtonGroup
      exclusive
      aria-label="text alignment"
      >
        <ToggleButton value="left" aria-label="left aligned">
          <ViewWeekIcon />
        </ToggleButton>
        <ToggleButton value="center" aria-label="centered">
          <ViewListIcon />
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  )
}
