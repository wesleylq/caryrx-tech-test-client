import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';


export default function Select({ data, setState }) {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      disableClearable
      options={data}
      getOptionLabel={(option) => option.name || option.type}
      sx={{ width: 500, margin:5 }}
      renderInput={(params) => <TextField {...params} label={data[0].type ? "Types" : "Companies" } />}
      onChange={(event, newInputValue) => {
        console.log('>',newInputValue )
        data[0].type  ? setState(newInputValue.type) : setState(newInputValue.id)
      }}
    />
  );
}