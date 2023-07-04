import React from 'react'
import { Box, Typography, Modal, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import deleteProfileMutation from './helpers/deleteProfile';
import { useMutation, gql } from '@apollo/client';
import { getProfiles } from './helpers/getAllProfiles';

export default function DeleteModal({ openDelete, setOpenDelete, handleOpenDelete, handleCloseDelete, anchorEl } ) {

    const [deleteProfile, { data, loading, error }] = useMutation(deleteProfileMutation, {
      refetchQueries: [
        getProfiles, // DocumentNode object parsed with gql
        'GetAllProfiles' 
      ]
    });

  const handleConfirmDelete = () => {
    deleteProfile({variables: {
      deleteProfileId: anchorEl.id
    }});
    handleCloseDelete();
  }

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    height: 300,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  return (
    <Modal
      open={openDelete}
      onClose={handleCloseDelete}
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
        }}
        >
          Remove Profile
          <CloseIcon onClick={handleCloseDelete}/>
        </Typography>

        <Typography 
        id="modal-modal-description" 
        variant="h6" 
        component="h5" 
        >
          Removed profile will be deleted permanently and won't be available anymore
        </Typography>

      <Button 
      variant="contained" 
      sx={{
        position: 'fixed',
        bottom: 30,
        left: 30
      }}
      onClick={handleCloseDelete}
      > Cancel </Button>

      <Button 
        variant="contained" 
        sx={{
          position: 'fixed',
          bottom: 30,
          right: 30
        }}
        onClick={handleConfirmDelete}
      > Delete </Button>
      </Box>
    </Modal>
  )
}
