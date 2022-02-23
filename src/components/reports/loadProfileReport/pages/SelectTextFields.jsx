import React, { useEffect, useState } from 'react';
import { Stack, Button, CssBaseline, AppBar, Toolbar, Typography, Box, TextField, Grid, MenuItem, Card } from '@mui/material';
import Home from '@mui/icons-material/Home';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
//import { DTR } from './Dropdown';
import { v4 as uuidv4 } from 'uuid';

import { Link } from "react-router-dom";
import axios, * as others from 'axios';
import ResponsiveDateRangePicker from '../components/DateDetails';
import MaterialChart from './SubmitAppScreen';
import { IconButton } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import Sections from '../utils/Sections.json';
import SubStation from '../utils/SubStation.json';
import Feeder from '../utils/Feeder.json';
import DTR from '../utils/DTR.json';

export default function SelectTextFields() {

  const [section, setSection] = useState([],"");
  const [subStation, setsubStation] = useState([],"");
  const [newsubsta, setnewsubsta] = useState([],"");

  const [feeder, setfeeder] = useState([],"");
  const [newfeeder, setnewfeeder] = useState([],"");

  const [dtr, setDTR] = useState([],"");
  const [newDTR, setnewDTR] = useState([],"");
  const [Meter, setMeter] = useState([],"");
  const [Ifyoualreadyknowthemeternumberpleaseenterhere, setIfyoualreadyknowthemeternumberpleaseenterhere] = useState([],"");
  const [FromDate, setFromDate] = useState([],"");
  const [ToDate, setToDate] = useState([],"");
  const [data, setData] = useState([],"");

  const onSections = (e) => {
    console.log(e.target.value);
    const substas = SubStation.filter((substa) => {
      return substa.sec_name === e.target.value;
    });
    console.log(substas);
    setSection(e.target.value);
    setsubStation(substas);
  };


  const onSubStation = (e) => {
    console.log(e.target.value);
    setnewsubsta(e.target.value);
    const feeders = Feeder.filter((feed) => {
      return feed.substa_name === e.target.value;
    });
    console.log(feeders);
    setfeeder(feeders);
  }
  const onFeeder = (e) => {
    console.log(e.target.value);
    setnewfeeder(e.target.value);
    const dtrs = DTR.filter((dtr2) => {
      return dtr2.Feeder_name === e.target.value;
    });
    setDTR(dtrs)
    console.log(dtrs);
  }
  const onDTR = (e) => {
    e.preventDefault()
    console.log(e.target.value);
    setnewDTR(e.target.value);
  }

  const initialValues = { 
    Meter: '',
    Ifyoualreadyknowthemeternumberpleaseenterhere: '',
    FromDate: '',
    ToDate: '',
  };
  
  const [values, setValues] = useState(initialValues);

  const clear = () => {
    alert("verified")
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
    console.log(e.target.value)
  };
  
 // useEffect(() => {
   // axios.get("http://localhost:4000/getInfos").then((response) => {
    //    data(response.data)
    //})
//}, []);
  const handleSubmit = (e) => {
    e.preventDefault();    
    console.log('InputFields', values);  
    console.log("section:",section);
    console.log("substation:",newsubsta);
    console.log("Feeder:",newfeeder);
    console.log("DTR:",newDTR);
    setValues({
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
<CssBaseline />
<AppBar elevation={12} position="static" style={{ background: '#60777d',borderRadius:'30px' }}>
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="open drawer">
          <HomeIcon style={{ color: 'black' }} />
        </IconButton>
        <IconButton size="large" edge="start" color="inherit" aria-label="open drawer">
          <ChevronRightIcon style={{ color: 'black' }} />
        </IconButton>
        <Typography style={{color:'black'}}>Reports</Typography>
        <IconButton style={{ marginLeft: '0px' }} size="large" edge="start" color="inherit" aria-label="open drawer">
          <ChevronRightIcon style={{ color: 'black' }} />
        </IconButton>
        <Typography style={{ marginRight: 'auto', marginLeft: '0px', color:'black' }} variant='h6'>Load Profile Report</Typography>
      </Toolbar>
      
    </AppBar>
    <br/>

    <Card elevation={10} sx={{ pt: 2, pb: 2, pl: 3,pr: 3, maxHeight: 500 }} style={{ borderRadius: 20 }}>
      
    <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Grid item xs={3}>
        <TextField
          name="sections"
          select
          fullWidth
          variant="outlined"
          color="primary"
          label="sections"
          onChange={onSections}
          value={section}
        >
          {Sections.map((sec) => (
            <MenuItem value={sec.name} key={sec.sec_id}>
              {sec.name}
            </MenuItem>
          ))}
        </TextField>
        </Grid>
        <Grid item xs={3}>
        <TextField
          name="newsubsta"
          select
          fullWidth
          variant="outlined"
          color="primary"
          label="sub station"
          onChange={onSubStation}
          value={newsubsta}
        >
          {subStation.map((substa) => (
            <MenuItem value={substa.name} key={substa.substa_id}>
              {substa.name}
            </MenuItem>
          ))}
        </TextField>
        </Grid>
        <Grid item xs={3}>
      
        <TextField
        name="newfeeder"
          select
          fullWidth
          variant="outlined"
          color="primary"
          label="Feeders"
          onChange={onFeeder}
          value={newfeeder}
        >
          {feeder.map((fee) => (
            <MenuItem value={fee.name} key={fee.Feeder_id}>
              {fee.name}
            </MenuItem>
          ))}
        </TextField>
        </Grid>
        <Grid item xs={3}>
        <TextField
         name="newDTR"
          select
          fullWidth
          variant="outlined"
          color="primary"
          label="DTR"
          onChange={onDTR}
          value={newDTR}
        >
          {dtr.map((dt) => (
            <MenuItem value={dt.name} key={dt.DTR_id}>
              {dt.name}
            </MenuItem>
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
      <Grid item xs={12} md={12}>
      <Stack spacing={2} direction="row" justifyContent="center">
      <Button variant="contained" color="success" style={{ borderRadius: 50, color: 'black', backgroundImage: `linear-gradient(to left, rgb(209,209,209), rgb(41,67,78))`, fontWeight: 'bold' }} onClick={handleSubmit}>SUBMIT</Button>
      <Button variant="contained" style={{ borderRadius: 50, color: 'black', backgroundImage: `linear-gradient(to left, rgb(209,209,209), rgb(41,67,78))`, fontWeight: 'bold' }}>CLEAR</Button>
      </Stack>
      </Grid>
      </Grid>
      </Card>
      <br />
    </Box>
  );
}
