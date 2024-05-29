import React from 'react';
import { Container, Typography, Button } from '@mui/material';

const CustomerManagement = () => {
  return (
    <Container maxWidth="md">
      <Typography variant="h4" component="h1" gutterBottom>
        Customer Management
      </Typography>
      <Button variant="contained" color="primary">
        Add Customer
      </Button>
      {/* Display and manage customer list here */}
    </Container>
  );
};

export default CustomerManagement;