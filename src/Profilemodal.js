import React from 'react';
import { Box, Typography, Modal, TextField, Switch, Grid, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import createProfileMutation from './helpers/createProfile';
import { useMutation } from '@apollo/client';
import { getProfiles } from './helpers/getAllProfiles';


export default function Profilemodal( { handleOpen, handleClose, open}) {

  const [newProfile, setNewProfile] = React.useState({isVerified: true});

  function handleModalInput(e) {
    e.preventDefault();

    const { name, value } = e.target;
    setNewProfile((prev) => ({
      ...prev,
      [name]: value,
    }))

    console.log(newProfile);
  }

  
    const [addProfile, { data, loading, error }] = useMutation(createProfileMutation, {
      refetchQueries: [
        getProfiles, // DocumentNode object parsed with gql
        'GetAllProfiles' 
      ]
    });

    const handleAddProfile = () => {

      console.log(newProfile);

      addProfile({
        variables: newProfile
      })
      if (error) {
        console.log(error);
      }

      handleClose();
    }
  
  
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
            name="imageUrl"
            id="outlined-required"
            label="Image Link"
            defaultValue="Image link"
            fullWidth
            onChange={handleModalInput}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
              required
              name="firstName"
              id="outlined-required"
              label="First name"
              defaultValue="First Name"
              fullWidth
              onChange={handleModalInput}
            />
        </Grid>
        <Grid item xs={6}>
            <TextField
              required
              name="lastName"
              id="outlined-required"
              label="Last name"
              defaultValue="Last Name"
              fullWidth
              onChange={handleModalInput}
            />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            name="email"
            id="outlined-required"
            label="Email"
            defaultValue="Email"
            fullWidth
            onChange={handleModalInput}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            name="description"
            id="outlined-required"
            label="Description"
            defaultValue="Description"
            fullWidth
            onChange={handleModalInput}
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
              label="Verification"
              defaultValue="Talent is verified"
              fullWidth
            /> 
            <Switch {...label} defaultChecked />
          </Box>
        </Grid>
      </Grid>

      <Button 
      variant="contained" 
      sx={{
        position: 'fixed',
        bottom: 30,
        right: 30
      }}
      onClick={handleAddProfile}
      > Create Profile </Button>
      </Box>
    </Modal>
  )
}
