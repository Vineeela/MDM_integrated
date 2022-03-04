import React, { useState } from 'react';
import { Stack, Button, Box, Grid, Typography, MenuItem } from '@mui/material';
import TextField from '@mui/material/TextField';




import Divisions from './Utils/Divisions.json';
import SubDivisions from './Utils/SubDivisions.json';
import Sections from './Utils/Sections.json';
import SubStations from './Utils/SubStations.json';
import Feeders from './Utils/Feeders.json';
import DTR from './Utils/DTR.json';
import Region from './Utils/Region.json';
import Circle from './Utils/Circles.json';


export default function Form() {//contains textfields and dropdowns



  const initialValues = {// initializing empty values to textfields' and dropdowns'
    Region: "",
    Circle: "",
    Division: "",
    SubDivision: "",
    Sections: "",
    SubStations: "",
    Feeder: "",
    DTR: "",
    METER: "",
    Fromdate: "",
    todate: "",
  };



  //useState(initialValues) hook is used to set and store initialized values
  const [values, setValues] = useState(initialValues);
  const [newRegion, setnewRegion] = useState([]);
  const [circle, setCircle] = useState([]);
  const [newCircle, setnewCircle] = useState([]);



  //useState([]) hook is used to set and store division to empty array initially
  const [division, setDivision] = useState([]);
  const [newDivision, setNewDivision] = useState([]);



  //useState([]) hook is used to set and store sub-division to empty array initially
  const [subDivision, setSubDivision] = useState([]);
  const [newSubdiv, setNewSubdiv] = useState([]);



  const [section, setSection] = useState([]);
  const [newSec, setnewSec] = useState([]);



  const [subStations, setSubStations] = useState([]);
  const [newSubSta, setnewSubSta] = useState([]);



  const [feeders, setFeeders] = useState([]);
  const [newFeeder, setNewFeeder] = useState([]);



  const [dtr, setdtr] = useState([]);
  const [newDtr, setNewDtr] = useState([]);




  const onRegion = (e) => {
    console.log(e.target.value);
    const circ = Circle.filter((cir) => {
      return cir.reg_name === e.target.value;
    })
    console.log(circ);
    setCircle(circ);
    setnewRegion(e.target.value);
  }
  //function to filter the circle' according to the selection of region
  const onCircle = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    const divs = Divisions.filter((div) => {
      return div.cir_name === e.target.value;
    });
    console.log(divs);
    setNewDivision(divs);
    setnewCircle(e.target.value);
  };





  //function to filter the sub divisions' according to the selection of division



  const onDivision = (e) => {
    console.log(e.target.value);
    const subdivs = SubDivisions.filter((subdiv) => {
      return subdiv.div_name === e.target.value;
    });
    console.log(subdivs);
    setSubDivision(subdivs);
    setDivision(e.target.value);



  };



  //function to filter the sections' according to the selection of sub-divisions
  const onSubDivision = (e) => {
    console.log(e.target.value);
    setNewSubdiv(e.target.value);
    const subsecs = Sections.filter((subsec) => {
      return subsec.subdiv_name === e.target.value;
    });
    console.log(subsecs);
    setSection(subsecs);
    setnewSec(e.target.value);
  };



  //function to filter the sub-stations' according to the selection of sections
  const onSection = (e) => {
    console.log(e.target.value);
    setnewSec(e.target.value);
    const substas = SubStations.filter((substa) => {
      return substa.sec_name === e.target.value;
    });
    console.log(substas);
    setSubStations(substas);
    setnewSubSta(e.target.value);




  }



  //function to filter the Feeders' according to the selection of sub-stations
  const onSubStation = (e) => {
    console.log(e.target.value);
    setnewSubSta(e.target.value);
    const feeds = Feeders.filter((feed) => {
      return feed.feeder_name === e.target.value;
    });
    console.log(feeds);
    setFeeders(feeds);
    setNewFeeder(e.target.value);



  }



  //function to filter distribution transformers'(DTR) according to the selection of feeders
  const onFeeder = (e) => {
    console.log(e.target.value);
    setNewFeeder(e.target.value);
    const dtrs = DTR.filter((dt) => {
      return dt.dtr_name === e.target.value;
    });
    console.log(dtrs);
    setdtr(dtrs);
    setNewDtr(e.target.value);



  }



  //function to select a DTR dropdown
  const onDtr = (e) => {
    console.log(e.target.value);
    setNewDtr(e.target.value);
  }



  const handleInputChange = e => {//function to change value on clicking, any of the options
    const { name, value } = e.target
    setValues({
      ...values, [name]: value
    })
  }



  const handleSubmit = (e) => {//submitting input fields' values to console/DB
    e.preventDefault();
    console.log("InputFields", values);
    setValues({
      Region: "",
      Circle: "",
      Division: "",
      SubDivision: "",
      Sections: "",
      SubStations: "",
      Feeder: "",
      DTR: "",
      METER: "",
      Fromdate: "",
      todate: "",
    })
  }




  return (
    <div>
       <Box
        component="form"
        sx={{'& .MuiTextField-root': { m:1, width:'35ch' }}}>
     
        <TextField
         
          id="outlined-read-only-input"
          label="Discom"
          defaultValue="TSSPDCL"
          InputProps={{
            readOnly: true,
          }}
         
        />
       
          <TextField
            select
            id="outlined-select"
            label="Region"
              value={newRegion}
              onChange={onRegion}
            >
              {Region.map(item => (
                <option key={item.name} value={item.name}>
                  {item.name}
                </option>
              ))}



            </TextField>

         
          <TextField
            select
            id="outlined-select"
            label="Circles"
              value={newCircle}
              onChange={onCircle}
            >
              {circle.map(item => (
                <option value={item.name} key={item.cir_id}>
                  {item.name}
                </option>
              ))}



            </TextField>
         
          <TextField
            select
            id="outlined-select"
            label="Division :"
              onChange={onDivision}
              value={division}
            >
              {newDivision.map((division) => (
                <MenuItem value={division.name} key={division.div_id}>
                  {division.name}
                </MenuItem>
              ))}
            </TextField>
         
          <TextField
            select
            id="outlined-select"
            label="Sub Division:"
              onChange={onSubDivision}
              value={newSubdiv}
            >
              {subDivision.map((subdiv) => (
                <MenuItem value={subdiv.name} key={subdiv.name}>
                  {subdiv.name}
                </MenuItem>
              ))}
            </TextField>
         
          <TextField
            select
            id="outlined-required"
            label="Sections:" 
              onChange={onSection}
              value={newSec}
            >
              {section.map((sec) => (
                <MenuItem value={sec.name} key={sec.section_id}>
                  {sec.name}
                </MenuItem>
              ))}
            </TextField>
         
          <TextField
            select
            id="outlined-select"
            label="Sub Stations :"
              onChange={onSubStation}
              value={newSubSta}
            >
              {subStations.map((sta) => (
                <MenuItem value={sta.name} key={sta.subsection_id}>
                  {sta.name}
                </MenuItem>
              ))}
            </TextField>
         
          <TextField
            select
            id="outlined-select"
            label="Feeder :"
              onChange={onFeeder}
              value={newFeeder}
            >
              {feeders.map((fee) => (
                <MenuItem value={fee.name} key={fee.feeder_id}>
                  {fee.name}
                </MenuItem>
              ))}
            </TextField>
       
          <TextField
            select
            id="outlined-select"
            label="DTR :"
              onChange={onDtr}
              value={newDtr}
            >
              {dtr.map(item => (
                <option key={item.name} value={item.dtr_id}>
                  {item.name}
                </option>
              ))}



            </TextField>
         
          <TextField
            select
            id="outlined-select"
            label="METER :"
           
              value={values.METER}



              onChange={handleInputChange}
            >



            </TextField>
         

     
      </Box>
    </div>
  );
}
