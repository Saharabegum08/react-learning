import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export default function Basic() {
  return (
    <form>
      <Box>
        <br />
        <TextField id="standard-basic" label="User Name" variant="standard" />
        <br />
        <TextField id="standard-basic" label="Password" variant="standard" />
        <br/>
        <br/>
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            {/* <FormControlLabel value="other" control={<Radio />} label="Other" /> */}
          </RadioGroup>
        </FormControl>
        <br />
        {/* <Checkbox {...label} /> */}
        <FormGroup style={{marginLeft:610}}>
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Active"
          />
          
        </FormGroup>
        <Button variant="contained">Login</Button>
      </Box>
    </form>
  );
}
