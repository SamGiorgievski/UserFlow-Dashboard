import React, { useEffect, useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, TableSortLabel, Toolbar, Typography, Paper, Checkbox, IconButton, Tooltip, FormControlLabel, Switch, DeleteIcon, FilterListIcon } from '@mui/material';


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

function GetAllProfiles( {setProfiles, profiles} ) {
  const { loading, error, data } = useQuery(getProfiles, {variables: {rows: 53}});
console.log(data);

  useEffect(() => {
    if(data) {
      setProfiles(data.getAllProfiles.profiles);
    }
    console.log(data);
    console.log(profiles);
  }, [data])

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;


  return data.getAllProfiles.profiles.map(({ description, email, first_name, id, image_url, is_verified, last_name, __typename
  }) => (
    <TableRow key={id}>
      <TableCell>
        <img 
        src={image_url}
        alt={id} 
        className="profileImgs"
        />
        {first_name}
      </TableCell>
      <TableCell>{id}</TableCell>
      <TableCell>{email}</TableCell>
      <TableCell>{description}</TableCell>
    </TableRow>
  ));
}

export { GetAllProfiles, getProfiles};