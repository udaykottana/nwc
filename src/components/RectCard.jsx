import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';

const styles = {
  card: {
    width: '100%', // Occupy full width of parent
    margin: 'auto',
    marginTop: 20,
    position: 'relative', // Add position relative
    backgroundColor: '#f5f5f5', // Default card color
    borderRadius: 5,
    cursor: 'pointer', // Add cursor pointer for hover effect
},
  cardSelected: { // Styles for selected card
    backgroundColor: 'lightblue', // Blue color on selection
  },
  content: {
    textAlign: 'left', // Align content to left
  },
  buttonContainer: {
    position: 'absolute', // Position the container absolutely
    top: 0, // Align to top
    right: 0, // Align to right
    margin: '5px', // Add margin for spacing
  },
};

const RectCard = ({ customer, onEdit, isSelected, onClick }) => {
  const handleEditClick = (e) => {
    e.stopPropagation(); // Prevent card click event from being triggered
    onEdit(); // Call the onEdit function passed as a prop
  };

  return (
    <Card
      style={{ ...styles.card, ...(isSelected && styles.cardSelected) }} // Apply selection styles conditionally
      onClick={onClick} // Handle card click event
    >
      <CardContent style={styles.content}>
        <Typography variant="h5" component="h2">
          {customer.firstName}
        </Typography>
        <Typography variant="body2" component="p">
          Site Count: {customer.siteCount}
        </Typography>
      </CardContent>
      <div style={styles.buttonContainer}>
        <IconButton onClick={handleEditClick} color="default">
          <EditIcon />
        </IconButton>
      </div>
    </Card>
  );
};

export default RectCard;
