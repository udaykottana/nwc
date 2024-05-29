import React from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import {
  InputLabel,
  FormControl,
  FormHelperText,
  IconButton,
} from "@mui/material";
const CustomSelect = ({
  label,
  options,
  id,
  name,
  style,
  value = "",
  onChange,
  displayEmpty,
  helperText,
  error,
  customPaddingLeft,
  color = "#F4F4F4 !important",
  disabled = false,
  alignText="center",
  width=""
}) => {
  const dynamicBorderWidth = error ? "2px" : "1px";
  return (
    <>
      <InputLabel
        shrink={false}
        sx={{
          marginTop: "14px",
          fontSize: "12px",
          fontWeight: "400",
          lineHeight: "16px",
          letterSpacing: "0.4px",
          marginBottom: "6px",
          textAlign:alignText,
          
        }}
      >
        {label}
      </InputLabel>
      <FormControl error={error}>
        <Select
          displayEmpty={displayEmpty}
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          error={error}
          disabled={disabled}
          sx={{
            backgroundColor: color ? color : "none",
            //width:"100%",
            ".MuiSelect-select": {
              paddingLeft: customPaddingLeft,
              ...{ color: value === "" ? "#8D8D8D" : "#161616" },
            },
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: error ? "#DA1E28" : "#0F62FE",
              borderWidth: dynamicBorderWidth,
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: error ? "#DA1E28" : "#0F62FE",
              borderWidth: dynamicBorderWidth,
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: error ? "#DA1E28" : "#0F62FE",
              borderWidth: dynamicBorderWidth,
            },
          }}
          style={
            style
              ? style
              : {
                  width: {width}||"30.48vw",
                  marginTop: "2px",
                  height: "40px",
                  
                }
          }
          IconComponent={UnfoldMoreIcon} // Set the IconComponent prop to UnfoldMoreIcon
        >
          <MenuItem value="" disabled={true}>
            - Select -
          </MenuItem>
          {options?.map((option) => (
            <MenuItem
              style={{ backgroundColor: "#F4F4F4" }}
              key={option?.value}
              value={option?.value}
            >
              {option?.icon && (
                <IconButton
                  style={{
                    padding: option?.value == "ja" ? "0px" : "8px",
                  }}
                >
                  {option?.icon}
                </IconButton>
              )}
              {option?.label}
            </MenuItem>
          ))}
        </Select>
        {helperText && (
          <FormHelperText sx={{ padding: "0px", margin: "0px" }}>
            {helperText}
          </FormHelperText>
        )}
      </FormControl>
    </>
  );
};

export default CustomSelect;
