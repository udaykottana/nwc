import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import LongMenu from '../common/reusable/LongMenu';

function createData(name, owner, recipients, tagCount, options) {
  return { name, owner, recipients, tagCount, options };
}

const rows = [
  createData('Xxxxx(Rule name', 'Admin', 3, 4, <LongMenu />),
  createData('Xxxxx(Rule name', 'Admin', 2, 4, <LongMenu />),
  createData('Xxxxx(Rule name', 'Admin', 7, 4, <LongMenu />),
  createData('Xxxxx(Rule name', 'Admin', 2, 4, <LongMenu />),
  createData('Xxxxx(Rule name', 'Admin', 6, 4, <LongMenu />),
];

export default function TableComponent() {
  return (
    <div className="table-container">
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead sx={{ backgroundColor: '#f5f5f5' }}>
            <TableRow>
              <TableCell sx={{ padding: '6px' }}>Rule Name</TableCell>
              <TableCell align="right" sx={{ padding: '6px' }}>Owner</TableCell>
              <TableCell align="right" sx={{ padding: '6px' }}>Recipients</TableCell>
              <TableCell align="right" sx={{ padding: '6px' }}>Tag Count</TableCell>
              <TableCell align="right" sx={{ padding: '6px' }}>&nbsp;</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{
                  '&:last-child td, &:last-child th': { border: 0 },
                  height: "40px" // Adjust the height here as needed
                }}
              >
                <TableCell component="th" scope="row" sx={{ padding: '6px' }}>
                  {row.name}
                </TableCell>
                <TableCell align="right" sx={{ padding: '6px' }}>{row.owner}</TableCell>
                <TableCell align="right" sx={{ padding: '6px' }}>{row.recipients}</TableCell>
                <TableCell align="right" sx={{ padding: '6px' }}>{row.tagCount}</TableCell>
                <TableCell align="right" sx={{ padding: '6px' }}>{row.options}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
