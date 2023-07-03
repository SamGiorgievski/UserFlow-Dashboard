import React, { useEffect, useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableFooter, TablePagination, TableRow, TableSortLabel, Toolbar, Typography, Paper, Checkbox, IconButton, Tooltip, FormControlLabel, Switch, DeleteIcon, FilterListIcon } from '@mui/material';
import { FirstPageIcon, KeyboardArrowLeft, KeyboardArrowRight, LastPageIcon } from '@mui/icons-material';
import { GetAllProfiles, getProfiles } from './helpers/getAllProfiles'
import './Profiles.css';

export default function Profiles() {

  const [profileCount, setprofileCount] = React.useState(0);
  const [profiles, setProfiles] = React.useState({});


  useEffect(() => {
    

    console.log()
    

  }, []);

  return (
    <TableContainer component={Paper} className="listView">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell> Name </TableCell>
            <TableCell> Email </TableCell>
            <TableCell> ID </TableCell>
            <TableCell> Description </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <GetAllProfiles setProfiles={setProfiles} profiles={profiles}/>
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
              colSpan={3}
              count={15}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  )
}
