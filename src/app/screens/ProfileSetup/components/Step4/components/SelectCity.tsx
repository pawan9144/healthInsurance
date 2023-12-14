import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const SelectCity = ({ data }: { data: any }) => {
  const [city, setCity] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setCity(event.target.value as string);
  };

  return (
    <div>
      <Box className="mt-5" sx={{ width: 350 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">City</InputLabel>
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
            value={city}
            label="city"
            onChange={handleChange}
          >
            {data?.map((item: any, i: number) => {
              return (
                <MenuItem key={i} value={item}>
                  {item}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </Box>
    </div>
  );
};

export default SelectCity;
