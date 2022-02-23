import React from 'react';
import { Stack, Button, CssBaseline, AppBar, Toolbar, Typography, Box, TextField, Grid , Card} from '@mui/material';
import { DTR, Feeder, Section, SubStation } from './Dropdown';
import { useState } from 'react';
import HomeIcon from '@mui/icons-material/Home';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { IconButton } from '@mui/material'



export default function SelectTextFields() {//Main component 

  const initialValues = {//initiating values to textfields
    Sections: '',
    SubStation: '',
    Feeder: '',
    DTR: '',
    Meter: '',
    Ifyoualreadyknowthemeternumberpleaseenterhere: '',
    FromDate: '',
    ToDate: ''
  };
  const [values, setValues] = useState(initialValues);// State to store initial values
  const clear = () => {//to show a pop-up to display "verified" text
    alert("verified")
  }

  const handleInputChange = (e) => {//changing the input as per the values
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
    console.log(e.target)
  };

  const handleSubmit = (e) => {// submitting the text fields' values to print at console
    e.preventDefault();
    console.log('InputFields', values);
    setValues({
      Sections: '',
      SubStation: '',
      Feeder: '',
      DTR: '',
      Meter: '',
      Ifyoualreadyknowthemeternumberpleaseenterhere: '',
      FromDate: '',
      ToDate: ''
    });
  };

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 2, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
<div>

<CssBaseline />
<AppBar elevation={12} position="static" style={{ background: '#60777d',borderRadius:'30px' }}>
<Toolbar>
  <IconButton size="large" edge="start" color="inherit" aria-label="open drawer">
  <HomeIcon style={{ color: 'white' }} />
  </IconButton>
  <IconButton size="large" edge="start" color="inherit" aria-label="open drawer">
  <ChevronRightIcon style={{ color: 'white' }} />
  </IconButton>
  <Typography>Reports</Typography>
  <IconButton style={{ marginLeft: '0px' }} size="large" edge="start" color="inherit" aria-label="open drawer">
  <ChevronRightIcon style={{ color: 'white' }} />
  </IconButton>
  <Typography style={{ marginRight: 'auto', marginLeft: '0px' }} variant='h6'>Power Factor Report</Typography>
</Toolbar>

</AppBar>
  </div>
  <br/>

    <Card elevation={10} sx={{ pt: 2, pb: 2, pl: 3,pr: 3, maxHeight: 500 }} style={{ borderRadius: 20 }}>
    <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Grid item xs={3}>
        <TextField
          id="outlined-select-currency-native"
          name="Sections"
          value={values.Sections}
          onChange={handleInputChange}
          select
          label="Sections:"
          SelectProps={{
            native: true,
          }}
        >
          {Section.map((option) => (
            <option key={option.value} value={option.label}>
              {option.label}
            </option>
          ))}
        </TextField>
        </Grid>
        <Grid item xs={3}>
        <TextField
          id="outlined-select-currency-native"
          select
          required
          label="Sub Station:"
          SelectProps={{
            native: true,
          }}
          name="SubStation"
          value={values.SubStation}
          onChange={handleInputChange}
        >
          {SubStation.map((option) => (
            <option key={option.value} value={option.label}>
              {option.label}
            </option>
          ))}
        </TextField>
        </Grid>
      
        <Grid item xs={3}>
        <TextField
          id="outlined-select-currency-native"
          select
          required
          label="Feeder:"
          SelectProps={{
            native: true,
          }}
          name="Feeder"
          value={values.Feeder}
          onChange={handleInputChange}
        >
          {Feeder.map((option) => (
            <option key={option.value} value={option.label}>
              {option.label}
            </option>
          ))}
        </TextField>
        </Grid>
        <Grid item xs={3}>
        <TextField
          id="outlined-select-currency-native"
          select
          required
          label="DTR:"
          SelectProps={{
            native: true,
          }}
          name="DTR"
          value={values.DTR}
          onChange={handleInputChange}
        >
          {DTR.map((option) => (
            <option key={option.value} value={option.label}>
              {option.label}
            </option>
          ))}
        </TextField>
        </Grid>
      </Grid>
     
      <Grid container direction="row" justifyContent="center" alignContent="center" >
        <TextField
          id="outlined-select-currency-native"
          required
          label="Meter:"
          name="Meter"
          value={values.Meter}
          onChange={handleInputChange}
        ></TextField>
      </Grid>
      <Grid container direction="row" justifyContent="center" alignContent="center" >
        <div style={{ display: "flex", alignItems: "center" }}>
          <Typography variant="h6" display="inline">
            If you already know the meter number, please enter here :
          </Typography>
          <TextField
            id="outlined-select-currency-native"
            name="Ifyoualreadyknowthemeternumberpleaseenterhere"
            required
            value={values.Ifyoualreadyknowthemeternumberpleaseenterhere}
            onChange={handleInputChange}
          ></TextField>
        </div>
      </Grid>
     
      <Grid container direction="row" justifyContent="center" alignContent="center" >
        <TextField
          name="FromDate"
          label="From Date"
          type="date"
          variant="outlined"
          value={values.FromDate}
          onChange={handleInputChange}
          sx={{ width: 220 }}
          InputLabelProps={{
            shrink: true
          }}
        />
        <TextField
          name="ToDate"
          label="To Date"
          type="date"
          variant="outlined"
          value={values.ToDate}
          onChange={handleInputChange}
          sx={{ width: 220 }}
          InputLabelProps={{
            shrink: true
          }}
        />
      </Grid>
      <Grid item xs={12} md={12}>
      <Stack spacing={2} direction="row" justifyContent="center">
      <Button variant="contained" color="success" style={{ borderRadius: 50, color: 'black', backgroundImage: `linear-gradient(to left, rgb(209,209,209), rgb(41,67,78))`, fontWeight: 'bold' }} onClick={handleSubmit}>SUBMIT</Button>
      <Button variant="contained" style={{ borderRadius: 50, color: 'black', backgroundImage: `linear-gradient(to left, rgb(209,209,209), rgb(41,67,78))`, fontWeight: 'bold' }}>CLEAR</Button>
      </Stack>
      </Grid>
      <br />
      </Card>
    </Box>
  );
}
