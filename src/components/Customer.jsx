import React, { useState,useEffect } from 'react';
import PageHeader from './pageHeader';
import { Paper, Toolbar, TextField, InputAdornment, Box } from '@mui/material';
import useTable from './useTable';
import { BorderAllRounded, Search } from "@mui/icons-material";
import customersData from './customers.json'; // Import JSON data
import RectCard from './RectCard';
import SearchIcon from '@mui/icons-material/Search';
const styles = {
    pageContent: {
        margin: '20px',
        padding: '15px'
    }
};

const headCells = [
    { id: 'fullName', label: 'Customer Name' },
];

export default function Customers() {
    
    const [filterFn, setfilterFn] = useState({ fn: items => items });
    
    // const [filter, setFilter] = useState({  });
    // // name:"j" ,role: 'admin'
    // const [options, setOptions] = useState({ sortBy: 'asc', limit: 5, page:1});
    const [selectedCustomer, setSelectedCustomer] = useState(null);

  
    const {
        TblContainer,
        Filter,
        TblPagination,
        recordsAfterPagingAndSorting,
        orderBy,
        order,
        handleRequestSort,page // Add handleRequestSort function from useTable hook
    } = useTable( headCells, filterFn);

    const handleSearch = (e) => {
        const { value } = e.target;
        setfilterFn({
            fn: items => {
                if (!value) {
                    return items;
                }
                return items.filter(x => x.fullName.toLowerCase().includes(value.toLowerCase()));
            }
        });
    };

    const handleCardClick = (customer) => {
        setSelectedCustomer(customer === selectedCustomer ? null : customer);
    };

    const handleEdit = () => {
        // Implement your edit logic here
    };

    return (
        <>
            <Paper style={styles.pageContent}>
                <PageHeader
                    title="Customers"
                    style={{ marginLeft: '40px' }}
                />
                <Toolbar style={{ paddingLeft: 0 }}>
                <TextField
    sx={{ marginLeft: '0', paddingLeft: '0' }}
    id='outlined-basic'
    //label="Search"
    placeholder="Search"
    variant="outlined"
    size="small"
    style={{ width: '50%' }}
    onChange={handleSearch}
    InputProps={{
      startAdornment: (
        <InputAdornment position="start">
          <SearchIcon />
        </InputAdornment>
      ),
    }}
  />
                    <Filter
                        headCells={headCells}
                        order={order}
                        orderBy={orderBy}
                        onRequestSort={handleRequestSort} // Pass handleRequestSort function
                    />
                </Toolbar>
                <Box 
              sx={{
                display: 'flex',
                overflowY: 'scroll',
                position: 'relative',
                height: '60vh',
                '&::-webkit-scrollbar': {
                width: '8px', // Width of the scrollbar
                },
                '&::-webkit-scrollbar-thumb': {
                backgroundColor: 'rgba(0, 0, 0, 0.2)', // Color of the thumb
                borderRadius: '4px', // Rounded corners of the thumb
                },
                '&::-webkit-scrollbar-thumb:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.3)', // Color of the thumb on hover
                },
                '&::-webkit-scrollbar-track': {
                backgroundColor: 'rgba(0, 0, 0, 0.1)', // Color of the track
                borderRadius: '4px', // Rounded corners of the track
                },
            }}>
                <TblContainer>
                    {recordsAfterPagingAndSorting().map(customer => (
                        <RectCard
                            key={customer.id}
                            customer={customer}
                            isSelected={customer === selectedCustomer}
                            onClick={() => handleCardClick(customer)}
                            onEdit={handleEdit}
                        />
                    ))}
                </TblContainer>
                </Box>
                <TblPagination />
            </Paper>
        </>
    );
}
