import React, { useState, useEffect } from "react";
import { Grid, InputLabel, Stack } from "@mui/material";
import CustomTextField from "../common/reusable/CustomTextField";
import FileUploadComponent from "../common/reusable/FileUploadComponent";
import TextArea from "../common/reusable/TextArea";

function SiteDetails({ stateData, setStateData }) {
  const [localFormData, setLocalFormData] = useState(stateData);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "file") {
      setLocalFormData((prevData) => ({
        ...prevData,
        [name]: files[0],
      }));
    } else {
      setLocalFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  // Update local state when prop changes
  useEffect(() => {
    setLocalFormData(stateData);
  }, [stateData]);

  // Update parent state when local state changes
  useEffect(() => {
    setStateData(localFormData);
  }, [localFormData, setStateData]);

  return (
    <Grid justifyContent="flex-start" alignItems="flex-start" sx={{ width: "98%" }}>
      <form style={{ minWidth: "70%", maxWidth: "" }}>
        <Stack className="customStackMargin" marginLeft={0} spacing={1}>
          <CustomTextField
            id="siteName"
            name="siteName"
            label="Site Name"
            placeholder="Enter site name"
            handleChange={handleChange}
            value={localFormData.siteName}
            width="100%"
            alignText="left"
          />
          <TextArea
          id="description"
            name="description"
            Placeholder={"Enter Description"}
            label="Description"
            width="100"
            value={localFormData.description}
            handleChange={handleChange}
          />
          <InputLabel sx={{ textAlign: "left" }}>
            Max File Size is 500KB. Supported file types are jpg, .jpeg, .png and webp
          </InputLabel>
          <div
            style={{
              border: "2px dotted grey",
              borderRadius: "5px",
              padding: "10px 0 50px 0px",
              textAlign: "center",
              flex: "true",
              flexDirection: "column",
              width: "100%"
            }}
          >
            <FileUploadComponent onChange={handleChange} />
          </div>
        </Stack>
      </form>
    </Grid>
  );
}

export default SiteDetails;
