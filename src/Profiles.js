import React, { useEffect, useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableFooter, TablePagination, TableRow, TableSortLabel, Toolbar, Typography, Paper, Checkbox, IconButton, Tooltip, FormControlLabel, Switch, DeleteIcon, FilterListIcon } from '@mui/material';
import { FirstPageIcon, KeyboardArrowLeft, KeyboardArrowRight, LastPageIcon } from '@mui/icons-material';
import { GetAllProfiles, getProfiles } from './helpers/getAllProfiles';
import './Profiles.css';
import TablePaginationActions from './Pagination';

export default function Profiles() {

  const [profileCount, setprofileCount] = React.useState(0);
  const [profiles, setProfiles] = React.useState([]);
  const [paginationOps, setPaginationOps] = React.useState({
    count: 0,
    page: 0,
    rowsPerPage: 10
  });

  const handleChangePage = (event, newPage) => {
    setPaginationOps(prev => ({
      ...prev,
      page: newPage
    }));
  };

  const handleChangeRowsPerPage = (event) => {
    setPaginationOps( prev => ({
      ...prev,
      rowsPerPage: parseInt(event.target.value, 10),
      page: 1
    })
      );
  };


  useEffect(() => {

    setPaginationOps( prev => ({
      ...prev,
      count: profiles.length
    }))

  }, [profiles]);


  return (
    <TableContainer component={Paper} className="listView">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell> Name </TableCell>
            <TableCell> Email </TableCell>
            <TableCell> ID </TableCell>
            <TableCell> Description </TableCell>
            <TableCell> Verified? </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <GetAllProfiles 
          setProfiles={setProfiles} 
          profiles={profiles}
          setprofileCount={setprofileCount}
          page={paginationOps.page}
          rowsPerPage={paginationOps.rowsPerPage}
          />
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
              colSpan={3}
              count={paginationOps.count} 
              rowsPerPage={paginationOps.rowsPerPage}
              page={paginationOps.page}
              SelectProps={{
                inputProps: {
                  'aria-label': 'rows per page',
                },
                native: true,
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  )
}
