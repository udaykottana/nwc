import React, { useState } from 'react';
import CustomTextField from '../common/reusable/CustomTextField';
import { Box, Button } from '@mui/material';
import CustomPasswordField from '../common/reusable/CustomPasswordField';

const EdgeDevice = () => {
  const [formData, setFormData] = useState({
    WebAccess_URL: '',
    WebAccess_User: '',
    WebAccess_password: '',
    EMS_URL: '',
    EMS_User: '',
    EMS_password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleWebAccessTest = () => {
    // Logic to handle saving WebAccess data
    console.log("WebAccess data saved:", formData);
  };

  const handleEMSTest = () => {
    // Logic to handle saving EMS data
    console.log("EMS data saved:", formData);
  };

  return (
    <div className="container" style={{width:"95%",margin:"10px"}}>
      <div className="box">
        <Box sx={{ display: "flex", flexDirection: "column", textAlign: "left",marginRight:"10px" }}>
          <h2>WebAccess</h2>
          <CustomTextField
            id="WebAccess_URL"
            name="WebAccess_URL"
            label="URL"
            placeholder="https://www.domain.com/example"
            handleChange={handleChange}
            value={formData.WebAccess_URL}
            width="98%"
            alignText="left"
            maxLength={128}
          />
          <CustomTextField
            id="WebAccess_User"
            name="WebAccess_User"
            label="User"
            placeholder="Enter User Name"
            handleChange={handleChange}
            value={formData.WebAccess_User}
            width="98%"
            alignText="left"
            maxLength={128}
          />
          <CustomPasswordField
            id="WebAccess_password"
            name="WebAccess_password"
            label="Password"
            placeholder="Enter password(optional)"
            handleChange={handleChange}
            value={formData.WebAccess_password}
            width="98%"
            alignText="left"
            type="password"
            maxLength={128}
          />
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: '10px' }}>
            <Button variant="contained" onClick={handleWebAccessTest}>Test Connection</Button>
          </Box>
        </Box>
      </div>
      <div className="box">
        <Box sx={{ display: "flex", flexDirection: "column", textAlign: "left",marginLeft:"10px" }}>
          <h2>EMS</h2>
          <CustomTextField
            id="EMS_URL"
            name="EMS_URL"
            label="URL"
            placeholder="https://www.domain.com/example"
            handleChange={handleChange}
            value={formData.EMS_URL}
            width="98%"
            alignText="left"
            maxLength={128}
          />
          <CustomTextField
            id="EMS_User"
            name="EMS_User"
            label="User"
            placeholder="Enter User Name"
            handleChange={handleChange}
            value={formData.EMS_User}
            width="98%"
            alignText="left"
            maxLength={128}
          />
          <CustomPasswordField
            id="EMS_password"
            name="EMS_password"
            label="Password"
            placeholder="Enter password(optional)"
            handleChange={handleChange}
            value={formData.EMS_password}
            width="98%"
            alignText="left"
            type="password"
            maxLength={128}
          />
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: '10px' }}>
            <Button variant="contained" onClick={handleEMSTest}>Test Connection</Button>
          </Box>
        </Box>
      </div>
    </div>
  );
};

export default EdgeDevice;
