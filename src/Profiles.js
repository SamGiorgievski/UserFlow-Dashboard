import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, TableSortLabel, Toolbar, Typography, Paper, Checkbox, IconButton, Tooltip, FormControlLabel, Switch, DeleteIcon, FilterListIcon } from '@mui/material';
import GetAllProfiles from './helpers/getAllProfiles'
import './Profiles.css';

export default function Profiles() {
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
          <GetAllProfiles />
        </TableBody>
      </Table>
    </TableContainer>
  )
}
