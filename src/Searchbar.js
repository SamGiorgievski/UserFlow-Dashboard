import React from 'react'
import './Searchbar.css';
import { TextField, Box, Button, ToggleButtonGroup, ToggleButton} from '@mui/material';
import ViewWeekIcon from '@mui/icons-material/ViewWeek';
import ViewListIcon from '@mui/icons-material/ViewList';
import Profilemodal from './Profilemodal';

export default function Searchbar( { openCreate, setOpenCreate, handleOpenCreate, handleCloseCreate, handleSearchInput }) {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="searchBar">
      {/* <Box
        component="form"
        sx={{
          '& > :not(style)': { 
            m: 1, }
        }}
        noValidate
        autoComplete="off"
      >
      </Box> */}

      <TextField 
      id="search" 
      label="search" 
      variant="outlined" 
      className="searchBox" 
      onChange={handleSearchInput}
      />

      <Button 
      variant="outlined" 
      className="createProfileButton" 
      onClick={handleOpenCreate}>Create profile</Button>

      <ToggleButtonGroup
      exclusive
      aria-label="text alignment"
      value="grid"
      >
        <ToggleButton 
        value="card" 
        aria-label="left aligned"
        >
          <ViewWeekIcon />
        </ToggleButton>
        <ToggleButton 
        value="grid" 
        aria-label="centered"
        >
          <ViewListIcon />
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  )
}
