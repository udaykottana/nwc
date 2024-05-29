import React, { useState } from "react";
import { Box, InputLabel, InputAdornment, TextField, IconButton } from "@mui/material";
import ErrorIcon from "@mui/icons-material/Error";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const CustomPasswordField = ({
  label,
  id,
  name,
  placeholder,
  error,
  fullWidth,
  handleChange,
  helperText,
  value,
  width = "",
  maxLength = 129,
  alignText = "center", // Default to center alignment
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <Box sx={{ marginTop: "16px" }}>
      <InputLabel htmlFor={id} sx={{ textAlign: alignText }}>
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
          },
          backgroundColor:"#F4F4F4",
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleTogglePassword}
                edge="end"
              >
                {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
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
        type={showPassword ? "text" : "password"}
      />
    </Box>
  );
};

export default CustomPasswordField;
