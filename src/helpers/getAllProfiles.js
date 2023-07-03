import React, { useEffect, useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, TableSortLabel, Toolbar, Typography, Paper, Checkbox, IconButton, Tooltip, FormControlLabel, Switch, DeleteIcon, FilterListIcon } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';


const getProfiles = gql`
query GetAllProfiles($orderBy: globalOrderBy, $searchString: String, $rows: Int, $page: Int) {
  getAllProfiles(orderBy: $orderBy, searchString: $searchString, rows: $rows, page: $page) {
    size
    profiles {
      id
      first_name
      last_name
      email
      is_verified
      image_url
      description
    }
  }
}
`;  

function GetAllProfiles( {setProfiles, profiles, page, rowsPerPage, valueToOrderBy, orderDirection} ) {
  const { loading, error, data } = useQuery(getProfiles, {variables: {
    rows: 50,
    orderBy: {
      key: 'email',
      sort: 'ASC'
    }
  }});


  useEffect(() => {
    if(data) {
      setProfiles(data.getAllProfiles.profiles);
      console.log(data.getAllProfiles.profiles)
    }
    
  }, [data])

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

if (data) {

function descendingComparator (a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1
  }
  if (b[orderBy] > a[orderBy]) {
    return 1
  }
  return 0
}

function getComparator (order, orderBy) {
  return order === "desc"
    ? (a,b) => descendingComparator (a, b, orderBy)
    : (a,b) => -descendingComparator(a, b, orderBy)
}

  const sortedRowInformation = (rowArray, comparator) => {
    const stabilizedRowArray = rowArray.map((el, index) => [el, index])
    stabilizedRowArray.sort((a,b) => {
      const order = comparator(a[0], b[0])
      if(order !==0) return order
      return a[1] - b[1]
    })
    return stabilizedRowArray.map((el) => el[0])
  }

  const sorted = sortedRowInformation(data.getAllProfiles.profiles, getComparator(orderDirection, valueToOrderBy));

  console.log(sorted);

  return sorted.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(
    ({ description, 
      email, 
      first_name, 
      id, 
      image_url, 
      is_verified, 
      last_name, __typename
  }) => (
    <TableRow key={id}>
      <TableCell>
        <img 
        src={image_url}
        alt={id} 
        className="profileImgs"
        />
        {`${first_name} + ${last_name}`}
      </TableCell>
      <TableCell>{id}</TableCell>
      <TableCell>{email}</TableCell>
      <TableCell>{description}</TableCell>
      <TableCell> <MoreVertIcon /> </TableCell>
    </TableRow>
  ));
}
}

export { GetAllProfiles, getProfiles};