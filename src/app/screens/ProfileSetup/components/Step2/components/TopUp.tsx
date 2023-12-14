import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";

const TopUp = ({
  data,
  currentSelection,
}: {
  data: any;
  currentSelection: any;
}) => {
  return (
    <div>
      <h3 className="text-2xl text-secondary">Top-Up Threshold Limit</h3>

      <Box className="flex mt-5 items-center mobile:flex-wrap gap-10 mobile:gap-5 justify-between">
        <FormControl className="w-full">
          <InputLabel id="demo-simple-select-label">Enter Limit</InputLabel>
          <Select
            MenuProps={{
              PaperProps: {
                style: {
                  maxHeight: "200px",
                  borderRadius: "8px",
                },
              },
            }}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Enter Limit"
          >
            {Array.from({ length: 10 }).map((item, i) => {
              return (
                <MenuItem key={i} value={i}>
                  Rs. {i}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </Box>
    </div>
  );
};

export default TopUp;
