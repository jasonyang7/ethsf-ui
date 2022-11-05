import * as React from 'react';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

interface Column {
  id: 'name' | 'cur_price' | 'apr';
  label: string;
  minWidth?: number;
  align?: 'right';
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: 'name', label: 'Name', minWidth: 170 },
  { 
    id: 'cur_price', 
    label: 'Current Price', minWidth: 100,
    format: (value: number) => value.toLocaleString('en-US'), 
  },
  {
    id: 'apr',
    label: 'APR',
    minWidth: 170,
    format: (value: number) => value.toLocaleString('en-US'),
  },
];

interface Data {
  name: string;
  cur_price: number;
  apr: number;
}

function createData(
  name: string,
  cur_price: number,
  apr: number,
): Data {
  return { name, cur_price, apr };
}

const rows = [
  createData('Currency 1', 1324171354, 3287263),
  createData('Currency 2', 1403500365, 9596961),
  createData('Currency 3', 60483973, 301340),
  createData('Currency 4', 327167434, 9833520),
  createData('Currency 5', 37602103, 9984670),
  createData('Currency 6', 25475400, 7692024),
  createData('Currency 7', 83019200, 357578),
  createData('Currency 8', 4857000, 70273),
  createData('Currency 9', 126577691, 1972550),
  createData('Currency 10', 126317000, 377973),
  createData('Currency 11', 67022000, 640679),
];

const StickyHeadTable = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={'center'}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
              <TableCell align={'center'}>Button</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.name}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={'center'}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                    <TableCell>
                      <Button>Borrow</Button>
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}

export default StickyHeadTable
