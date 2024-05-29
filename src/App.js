import React from 'react';

import Header from './components/Header';

import { LanguageProvider } from "./components/LanguageContext";
import Box from '@mui/material/Box';


import CustomerForm from './components/CustomerForm';
import Customer from './components/Customer';
import './App.css'


function App() {
  return (
<LanguageProvider>
      <div className='App'>
        {/* <Header/> */}
        <Box
          sx={{
            mb: 2,
            display: "flex",
            flexDirection: "row",
            maxHeight: "80vh", // Set maximum height to 80% of viewport height
            width: "100%",
            left: 0,
            right: 0,
          }}
        >
          {/* <Customer sx={{ flex:"0.5" }} /> */}
          <div style={{flex:"1"}}>
          <CustomerForm />
          </div>
          
        </Box>
        
      </div>
    </LanguageProvider>
  );
}

export default App;