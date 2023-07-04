import React, { useEffect } from 'react';
import { Box, Typography, Modal, TextField, Switch, Grid, Button, FormControlLabel } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import createProfileMutation from './helpers/createProfile';
import updateProfileMutation from './helpers/updateProfile';
import { useMutation } from '@apollo/client';
import { getProfiles } from './helpers/getAllProfiles';


export default function Profilemodal( { open, anchorEl, selectedProfile, handleCloseCreate}) {

  const [newProfile, setNewProfile] = React.useState({
    isVerified: false
  });

  // Create profile
  const [addProfile, { data, loading, error }] = useMutation(createProfileMutation, {
    refetchQueries: [
      getProfiles, // DocumentNode object parsed with gql
      'GetAllProfiles' 
    ]
  });
  
  // Edit profile

  const [updateProfile] = useMutation(updateProfileMutation, {
    refetchQueries: [
      getProfiles, // DocumentNode object parsed with gql
      'GetAllProfiles' 
    ]
  });

  // Submit

  const handleSubmit = () => {

    if (!anchorEl) {
      addProfile({
        variables: newProfile
      })

      if (error) {
        console.log(error);
      }

      handleCloseCreate();
      return
    }

    updateProfile({
      variables: {
        updateProfileId: selectedProfile.id,
        firstName: newProfile.firstName ? newProfile.firstName : selectedProfile.first_name,
        lastName: newProfile.lastName ? newProfile.lastName : selectedProfile.last_name,
        email: newProfile.email ? newProfile.email : selectedProfile.email,
        isVerified: true,
        imageUrl: newProfile.imageUrl ? newProfile.imageUrl : selectedProfile.image_url,
        description: newProfile.description ? newProfile.description : selectedProfile.description
      }
    })
    
    handleCloseCreate();
  }

  // form input

  function handleModalInput(e) {
    e.preventDefault();
    console.log(e.target.value);
    console.log(e)

    const { name, value } = e.target;
    setNewProfile((prev) => ({
      ...prev,
      [name]: value,
    }))
  }


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
      onClose={handleCloseCreate}
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

          {anchorEl ? "Edit profile" : "Create Profile" }

          <CloseIcon onClick={handleCloseCreate}/>
        </Typography>

        

        <Grid container spacing={2} rowSpacing={2}>
        <Grid item xs={12}>
          <TextField
            required
            name="imageUrl"
            id="outlined-required"
            label="Image Link"
            defaultValue= {selectedProfile ? selectedProfile.image_url : "" }
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
              defaultValue={selectedProfile ? selectedProfile.first_name : "" }
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
              defaultValue={selectedProfile ? selectedProfile.last_name : "" }
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
            defaultValue={selectedProfile ? selectedProfile.email : "" }
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
            defaultValue={selectedProfile ? selectedProfile.description : "" }
            fullWidth
            onChange={handleModalInput}
          />
        </Grid>
        <Grid item xs={12} >
          <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: "center"
        }} >
            <TextField
              disabled
              id="outlined-disabled"
              label="Verification"
              fullWidth
              defaultValue={
                selectedProfile ? 
                ( selectedProfile.is_verified ? "Talent is verified" : "Talent is not verified")
                : "Talent is not verified"}
              /> 
                <Switch 
                defaultChecked={selectedProfile ? selectedProfile.is_verified : false}
                disabled
                />
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
      onClick={handleSubmit}
      > Create Profile </Button>
      </Box>
    </Modal>
  )
}
