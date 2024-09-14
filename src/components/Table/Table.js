import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),

];

export default function BasicTable() {
  return (
    <TableContainer component={Paper} sx={{width:"100%", maxHeight:440}}>
      <Table sx={{ minWidth: 300 }} stickyHeader>
        <TableHead >
          <TableRow sx={{backgroundColor:"red"}}>
            <TableCell sx={{width:"4%", backgroundColor:"grey"}} align="center"></TableCell>
            <TableCell sx={{width:"24%", backgroundColor:"grey"}} align="left">Candidate name</TableCell>
            <TableCell sx={{width:"24%", backgroundColor:"grey"}} align="center">Job Name</TableCell>
            <TableCell sx={{width:"24%", backgroundColor:"grey"}} align="center">Rating</TableCell>
            <TableCell sx={{width:"24%", backgroundColor:"grey"}} align="center">Applied Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="right">{1}</TableCell>
              <TableCell align="center">{row.calories}</TableCell>
              <TableCell align="center">{row.fat}</TableCell>
              <TableCell align="center">{row.carbs}</TableCell>
              <TableCell align="center">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
