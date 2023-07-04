import React, { useEffect, useState } from 'react';
import './App.css';
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableFooter, TablePagination, TableRow, TableSortLabel, Paper } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import { GetAllProfiles } from './Table';
import DeleteModal from './DeleteModal';


import Navbar from './Navbar';
import Searchbar from './Searchbar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

function App() {

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });


  const [profileCount, setprofileCount] = React.useState(0);
  const [profiles, setProfiles] = React.useState([]);
  const [paginationOps, setPaginationOps] = React.useState({
    count: 0,
    page: 0,
    rowsPerPage: 10
  });
  const [orderDirection, setOrderDirection] = React.useState("asc");
  const [valueToOrderBy, setValueToOrderBy] = React.useState("email");
  const [openDelete, setOpenDelete] = React.useState(false);
  const [openEdit, setOpenEdit] = React.useState(false);

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleOpenDelete = () => {setOpenDelete(true);};
  const handleCloseDelete = () => {
    setOpenDelete(false);
    setAnchorEl(null);
  };

  const handleSettingsOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleSettingsClose = () => {
    setAnchorEl(null);
    console.log(anchorEl);
  };

  const handleRequestSort = (event, property) => {
    const isAscending = (valueToOrderBy === property && orderDirection === 'asc')
    setValueToOrderBy(property)
    setOrderDirection(isAscending ? 'desc' : 'asc')
  }

  const createSortHandler = (property) => (event) => {
    handleRequestSort(event, property)
  }

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
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div>
        <Navbar />
        <Searchbar />
        
        <TableContainer component={Paper} className="listView">
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell> Name </TableCell>
              <TableCell> ID </TableCell>
              <TableCell> 
                <TableSortLabel
                  active={valueToOrderBy === "email"}
                  direction={valueToOrderBy === "email" ? orderDirection: "asc"}
                  onClick={createSortHandler("email")}
                >
                  Email 
                </TableSortLabel>
              </TableCell>
              <TableCell> Description </TableCell>
              <TableCell> <SettingsIcon /> </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <GetAllProfiles 
            setProfiles={setProfiles} 
            profiles={profiles}
            setprofileCount={setprofileCount}
            page={paginationOps.page}
            rowsPerPage={paginationOps.rowsPerPage}
            orderDirection={orderDirection}
            valueToOrderBy={valueToOrderBy}
            handleOpenDelete={handleOpenDelete}
            handleSettingsOpen={handleSettingsOpen}
            handleSettingsClose={handleSettingsClose}
            anchorEl={anchorEl}
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

      <DeleteModal 
      openDelete={openDelete}
      setOpenDelete={setOpenDelete}
      handleOpenDelete={handleOpenDelete}
      handleCloseDelete={handleCloseDelete}
      anchorEl={anchorEl}
      open={openDelete}
      />

      </div>
    </ThemeProvider>
  );
}

export default App;
