import React from "react";

function FileUploadComponent({ onChange }) {
  const handleFileChange = (e) => {
    onChange(e);
  };

  return (
    <label htmlFor="file-upload" style={{ cursor: "pointer" }}>
      <div
        style={{
          
          borderRadius: "5px",
          padding: "0px",
          textAlign: "left",
          minWidth:"108.37282780410743vh",
          color:"#0f62fe"
        }}
      >
        <div style={{
          
         
          marginLeft:"14px"
          
        }}>Drop the files here or click to upload</div>
        <input
          type="file"
          id="file-upload"
          name="file"
          accept=".jpg, .jpeg, .png, .pdf" // Define accepted file types if needed
          onChange={handleFileChange}
          style={{ display: "none" }} // Hide the default file input
        />
      </div>
    </label>
  );
}

export default FileUploadComponent;
