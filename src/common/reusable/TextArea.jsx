import * as React from 'react';
import { styled } from '@mui/system';
import { Box, InputLabel,TextField } from '@mui/material';
const TextArea = ({id, width=100,Placeholder = "empty",label,height="64",value,name, handleChange}) => {
  const blue = {
    100: '#DAECFF',
    200: '#b6daff',
    400: '#3399FF',
    500: '#007FFF',
    600: '#0072E5',
    900: '#003A75',
  };

  const grey = {
    50: '#F3F6F9',
    100: '#E5EAF2',
    200: '#DAE2ED',
    300: '#C7D0DD',
    400: '#B0B8C4',
    500: '#9DA8B7',
    600: '#6B7A90',
    700: '#434D5B',
    800: '#303740',
    900: '#1C2025',
  };

  const Textarea = styled('textarea')(
    ({ theme }) => `
    box-sizing: border-box;
    width: ${width}%; /* Fixed width */
    height: ${height}px; /* Fixed height */
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1;
    padding: 12px;
    border-radius: 8px;
    color:black;
    background: #F4F4F4;
    border: 1px solid #BCBCBC;
    box-shadow: 0px 2px 2px ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};
    &::placeholder {
      color:#ABABAB;
    }
    &:hover {
      border-color: black;
    }

    &:focus {
      outline: 1;
      
      border:2px solid #1976d2;
    }

    // firefox
    &:focus-visible {
      outline: 0;
    }
    onInput={(e) => {
      const currentValue = e.target.value;
      if (currentValue.length > maxLength) {
        e.target.value = currentValue.slice(0, maxLength);
      }
    }}
    InputProps={{
      startAdornment: startAdornment && startAdornment,
      endAdornment: error && (
        <InputAdornment position="end">
          <IconButton aria-label="error">
            <ErrorIcon color="error" />
          </IconButton>
        </InputAdornment>
      ),
    }}
  `,
  );

  return (<>
  <Box >
      <InputLabel sx={{ textAlign: "left" }}>
        {label}
      </InputLabel>
      <Textarea
        id={id}
        aria-label="empty textarea"
        placeholder={Placeholder} 
        name ={name}
         value={value}
        onChange={handleChange}
      />
    </Box>
    </>
  );
};

export default TextArea;