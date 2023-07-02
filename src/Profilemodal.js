import React from 'react'
import { Box, Typography, Modal, TextField, Switch, Grid } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

export default function Profilemodal( { handleOpen, handleClose, open}) {

  const label = { inputProps: { 'aria-label': 'Switch demo' } };

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    height: 600,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      >
      <Box sx={style}>
      
        <Typography 
        id="modal-modal-title" 
        variant="h6" 
        component="h2" 
        style={{ 
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '30px'
        }}>
          Create Profile
          <CloseIcon onClick={handleClose}/>
        </Typography>

        

        <Grid container spacing={2} rowSpacing={2}>
        <Grid item xs={12}>
          <TextField
            required
            id="outlined-required"
            label="Required"
            defaultValue="Image link"
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
              required
              id="outlined-required"
              label="Required"
              defaultValue="First Name"
              fullWidth
            />
        </Grid>
        <Grid item xs={6}>
            <TextField
              required
              id="outlined-required"
              label="Required"
              defaultValue="Last Name"
              fullWidth
            />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="outlined-required"
            label="Required"
            defaultValue="Email"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="outlined-required"
            label="Required"
            defaultValue="Description"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} >
          <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
        }} >
            <TextField
              disabled
              id="outlined-disabled"
              label="Disabled"
              defaultValue="Hello World"
              fullWidth
            /> 
            <Switch {...label} defaultChecked />
          </Box>
        </Grid>
      </Grid>

        
      </Box>
    </Modal>
  )
}
