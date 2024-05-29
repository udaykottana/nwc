import React, { useState, useEffect } from 'react';
import { Table, TableHead, TableRow, TableCell, TablePagination, TableSortLabel, Menu, MenuItem, IconButton, Select, FormControl, InputLabel } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
export default function useTable( headCells, filterFn) {
    const tableStyle = {
        marginTop: 'theme.spacing(3)',
        '& thead th': {
            fontWeight: '600',
            color: 'theme.palette.primary.main',
            backgroundColor: 'theme.palette.primary.light',
        },
        '& tbody td': {
            fontWeight: '300',
        },
        '& tbody tr:hover': {
            backgroundColor: '#fffbf2',
            cursor: 'pointer',
        },
    };
    const [records, setRecords] = useState([]);
    const [recordslen, setRecordslen] = useState(null);
    const pages = [5, 10, 25];
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(pages[0]);
    const [order, setOrder] = useState('asc'); 
    const [orderBy, setOrderBy] = useState();
    const [filteredRecords, setFilteredRecords] = useState(records); // State for filtered records
    const [filter, setFilter] = useState({  });
    // name:"j" ,role: 'admin'
    const [options, setOptions] = useState({ sortBy: `firstName:${order}`, limit: 6, page:1});
    useEffect(() => {
        fetchData();
    }, [filter, options,order]);

    const fetchData = async () => {
        try {
            const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NjQ3NDc3Y2EyYTYxYzU4NjA1ZDI1OWQiLCJpYXQiOjE3MTYzNzM1NDQsImV4cCI6MTcxNjM3NTM0NCwidHlwZU9mVXNlciI6IlVzZXIiLCJ0eXBlIjoiYWNjZXNzIn0.KFnzl5hOApNdaD_kZ1Jb-ND6efOiy7qlzXiApRn-uQg';
            const queryParams = new URLSearchParams({
                ...filter,
                ...options,
                sortBy: `firstName:${order}`,
                page:`${page+1}`
            });
            const response = await fetch(`http://localhost:5000/v1/users?${queryParams}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const data = await response.json();
            setRecordslen(data.totalResults);
            console.log(data);
            setRecords(prevRecords => [...prevRecords, ...data.results]); // Add new data to existing records
       
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    // Update filtered records when filterFn or records change
    useEffect(() => {
        const filteredData = filterFn.fn(records);
        setFilteredRecords(filteredData);
        setPage(0); // Reset page when filtered data changes
    }, [filterFn, records, order]);

    const TblContainer = (props) => (
        <Table style={tableStyle}>
            {props.children}
        </Table>
    );

    const Filter = ({ order, orderBy, onRequestSort, headCells }) => {
        const [anchorEl, setAnchorEl] = useState(null);

        const handleClick = (event) => {
            setAnchorEl(event.currentTarget);
        };

        const handleClose = () => {
            setAnchorEl(null);
        };

        const handleSortRequest = (cellId, ascordesc) => {
            setOrder(ascordesc);
            // setOptions(prevOptions => ({
            //     ...prevOptions,
            //     sortBy:`firstName:${order}`
            // }));
            setOrderBy(cellId);
        };

        return (
            <TableHead>
                <TableRow>
                    <TableCell style={{ padding: 7 }}>
                        <IconButton size="small" style={{ padding: 0 }} onClick={handleClick}>
                            <FilterListIcon style={{ fontSize: 16 }} />
                        </IconButton>

                        <Menu
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={() => handleSortRequest('fullName', 'asc')}>
                                A to Z
                            </MenuItem>
                            <MenuItem onClick={() => handleSortRequest('fullName', 'desc')}>
                                Z to A
                            </MenuItem>
                        </Menu>
                    </TableCell>
                </TableRow>
            </TableHead>
        );
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handlePageChange = (event) => {
        setPage(parseInt(event.target.value, 10) - 1);
    };

    const TblPagination = () => (
        <div style={{ width: '100%', overflowX: 'auto' }}>
            <TablePagination size='small'
                component="div"
                page={page}
                rowsPerPageOptions={pages}
                rowsPerPage={rowsPerPage}
                count={recordslen} // Use filteredRecords length for pagination count
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                ActionsComponent={({ onPageChange }) => (
                    <div style={{ display: 'flex', alignItems: 'center' }}>

                        <IconButton
                            onClick={() => onPageChange(null, page - 1)} // Decrement page on previous button click
                            disabled={page === 0} // Disable previous button when on the first page
                        >
                            <NavigateBeforeIcon />
                        </IconButton>
                        <FormControl variant="outlined" size="small" style={{ minWidth: 50, marginRight: 8 }}>
                            <Select
                                value={page + 1}
                                onChange={handlePageChange}
                                inputProps={{
                                    name: 'page',
                                    id: 'page-select',
                                }}
                                sx={{ fontSize: 15 }}
                            >
                                {Array.from({ length: Math.ceil(recordslen / rowsPerPage) }, (_, index) => (
                                    <MenuItem key={index + 1} value={index + 1}>
                                        {index + 1}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        <IconButton
                            onClick={() => onPageChange(null, page + 1)} // Increment page on next button click
                            disabled={(page + 1) * rowsPerPage >= filteredRecords.length} // Disable next button when reaching the last page
                        >
                            <NavigateNextIcon />
                        </IconButton>
                    </div>
                )}
                labelDisplayedRows={({ from, to, count }) => {
                    return `${from}-${to}of${count}|Page${page + 1}`;
                }}
            />
        </div>
    );
    
    

    function stableSort(array, comparator) {
        const stabilizedThis = array.map((el, index) => [el, index]);
        stabilizedThis.sort((a, b) => {
            const order = comparator(a[0], b[0]);
            if (order !== 0) return order;
            return a[1] - b[1];
        });
        return stabilizedThis.map((el) => el[0]);
    }

    function getComparator(order, orderBy) {
        return order === 'desc'
            ? (a, b) => descendingComparator(a, b, orderBy)
            : (a, b) => -descendingComparator(a, b, orderBy);
    }

    function descendingComparator(a, b, orderBy) {
        if (b[orderBy] < a[orderBy]) {
            return -1;
        }
        if (b[orderBy] > a[orderBy]) {
            return 1;
        }
        return 0;
    }

    const recordsAfterPagingAndSorting = () => {
        return stableSort(filteredRecords, getComparator(order, orderBy)).slice(
            page * rowsPerPage,
            (page + 1) * rowsPerPage
        );
    };

    return {
        TblContainer,
        Filter,
        TblPagination,
        recordsAfterPagingAndSorting,
    };
}
