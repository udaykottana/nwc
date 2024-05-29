import React from "react";
import {
  Box,
  InputLabel,
  InputAdornment,
  TextField,
  IconButton,
} from "@mui/material";
import ErrorIcon from "@mui/icons-material/Error";

const CustomTextField = ({
  label,
  id,
  name,
  placeholder,
  error,
  fullWidth,
  handleChange,
  helperText,
  value,
  type,
  width = "",
  startAdornment,
  color = "#F4F4F4",
  maxLength = 129,
  alignText = "center", // Default to center alignment
}) => {
  return (
    <Box sx={{ marginTop: "16px" }}>
      <InputLabel htmlFor="input-with-icon-adornment" 
      sx={{ textAlign: alignText }}
      >
        {label}
      </InputLabel>
      <TextField
        fullWidth={fullWidth}
        id={id}
        name={name}
        error={error}
        helperText={helperText}
        sx={{
          width: width,
          "& .MuiInputBase-root": {
            height: "40px",
            backgroundColor: color ? color : "transparent",
          },
          "& input:-webkit-autofill": {
            marginTop: "10px",
            WebkitBoxShadow: "0 0 0 30px white inset", // Override autofill background
            WebkitTextFillColor: "inherit", // Override autofill text color
          },
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
        onInput={(e) => {
          const currentValue = e.target.value;
          if (currentValue.length > maxLength) {
            e.target.value = currentValue.slice(0, maxLength);
          }
        }}
        placeholder={placeholder}
        onChange={handleChange}
        value={value}
        type={type}
      />
    </Box>
  );
};

export default CustomTextField;
