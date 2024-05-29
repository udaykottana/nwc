import React, { useState } from 'react';
import { Box, Stack, InputLabel, Icon, Button ,Grid} from '@mui/material';
import CustomTextField from '../common/reusable/CustomTextField';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CustomSelect from '../common/reusable/CustomSelect';
const SiteAddress = () => {
  const [formData, setFormData] = useState({
    siteName: "",
    postalCode: "",
    prefectures: "",
    city: "",
    buildingName: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <Grid justifyContent="flex-start" alignItems="flex-start" sx={{width:"98%"}}>
      <form style={{ minWidth: "70%", maxWidth: "100%" }}>
        <Stack className="customStackMargin" marginLeft={0} spacing={1}>
        <div style={{ textAlign: "left" }}>
          <InputLabel htmlFor="input-with-icon-adornment" sx={{ textAlign: "left"}}> Country </InputLabel> 
          <Box display="flex" alignItems="left">
             <img src="japan.png" alt="Japan Flag" title="Japan Flag" width="20" height="20" style={{ marginRight: '8px' }} /> 
          <InputLabel htmlFor="input-with-icon-adornment">Japan</InputLabel> 
          </Box>
          </div>

          <CustomTextField
            id="postalCode"
            name="postalCode"
            label="Postal Code"
            placeholder="000-0000"
            handleChange={handleChange}
            value={formData.postalCode}
            width="100%"
            alignText="left"
            maxLength={8}
          />

          <CustomSelect
            id="prefectures"
            name="prefectures"
            label="Prefectures"
            onChange={handleChange}
            alignText="left"
            width="100%"
          />

          <CustomTextField
            id="city"
            name="city"
            label="City"
            placeholder="Enter Your City Name"
            handleChange={handleChange}
            value={formData.city}
            width="100%"
            alignText="left"
            maxLength={50}
          />

          <CustomTextField
            id="buildingName"
            name="buildingName"
            label="Building name, unit number, etc."
            placeholder="Enter Building Name"
            handleChange={handleChange}
            value={formData.buildingName}
            width="100%"
            alignText="left"
            maxLength={50}
          />

        <div style={{ display: "flex", flexDirection: "column", alignItems: "left" }}>
          <InputLabel sx={{ textAlign: "left" }}>
            Map
          </InputLabel>
          <Button variant="outlined" sx={{ width: "25%", alignItems: "left", justifyContent: "flex-start" }}>
            <span style={{ display: "flex" }}>
              View On Map <LocationOnIcon sx={{marginTop:"-2px"}}/>
            </span>
          </Button>
        </div>


          {/* Customized File upload component */}
          {/* <TextArea width="730" Placeholder={"Enter Description"} label={"Description"}/> */}
          
        </Stack>
      </form>
    </Grid>
  );
};

export default SiteAddress;