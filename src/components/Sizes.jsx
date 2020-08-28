import React from "react";
import { FormControl, Select, MenuItem, InputLabel } from "@material-ui/core";

export default function Sizes(props) {
  const change = (event) => {
    props.changeSize(event.target.value);
  };
  return (
    <FormControl>
      <InputLabel id="demo-simple-select-label">Size</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={props.size}
        onChange={change}
        style={{ width: "90px" }}
      >
        <MenuItem value={"XS"}>XS</MenuItem>
        <MenuItem value={"S"}>S</MenuItem>
        <MenuItem value={"M"}>M</MenuItem>
        <MenuItem value={"L"}>L</MenuItem>
        <MenuItem value={"XL"}>XL</MenuItem>
      </Select>
    </FormControl>
  );
}
