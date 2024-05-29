import React from 'react';
import { Button } from "@mui/material";
import TableComponent from './TableComponent';

const EmailNotification = () => (<>

  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between',  }}>
    <div>
      <h4 style={{ fontSize: '1.2rem' }}>Email notification</h4>
    </div>
    <div>
      <Button variant="contained" disableElevation size="large" sx={{ padding: '0.5rem 1rem', fontSize: '0.9rem', textTransform: 'none' }}>
       <div> Create rule + </div>
      </Button>
    </div>
   
  </div>
  <TableComponent/>
  </>
);

export default EmailNotification;
