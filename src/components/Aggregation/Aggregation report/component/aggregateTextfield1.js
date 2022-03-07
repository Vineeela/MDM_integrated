import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

const regions = [
  {
    value: 'id1',
    label: 'SOUTH REGION',
  },
  {
    value: 'id2',
    label: 'NORTH REGION',
  }
];

const circles = [
  {
    value: 'id1',
    label: 'RANGAREDDY CIRCLE',
  },

  {
    value: 'id2',
    label: 'HYDERABAD CIRCLE',
  }];

  const divisions = [
    {
      value: 'id1',
      label: 'SAIFABAD',
    },
    {
      value: 'id2',
      label: 'MEHADIPATNAM',
    }
  ];

  const sub_divisions = [
    {
      value: 'id1',
      label: 'A C GUARDS',
    },
    {
      value: 'id2',
      label: 'MEHADIPATNAM',
    },
    {
      value: 'id3',
      label: 'GOLCONDA',
    }
  ];

  const sections = [
    {
      value: 'id1',
      label: 'GOLCONDA -9808989098',
    },
    {
      value: 'id2',
      label: 'LANGER HOUSE -8798657672',
    },
    {
      value: 'id3',
      label: 'SAIKPET -8767855442',
    }
  ];

  


export default function SelectTextFields1() {
  const [region, setRegion] = React.useState('');
  const [circle, setCircle] = React.useState('');
  const [division, setDivision] = React.useState('');
  const [sub_division, setSub_division] = React.useState('');
  const [section, setSection] = React.useState('');
  

  const handleChange = (event) => {
    setRegion(event.target.value);
  };

    const handleChange1 = (e) => {
      setCircle(e.target.value);
  };

  const handleChange2 = (e) => {
    setDivision(e.target.value);
};

const handleChange3 = (e) => {
  setSub_division(e.target.value);
};

const handleChange4 = (e) => {
  setSection(e.target.value);
};
 
/*const datas=[
  {
region:'',
circle:'',
division:'',
sub_division:'',
section:''

}];
 const [data,setData]=React.useState(datas);
// onsubmit
const onsubmit=(e)=>{
setData(e.target.value)
console.log(data);

};
*/

  return (



    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '20ch' },
      }}
      noValidate
      autoComplete="off"
    >

      <div>

      <b>Discom :</b><TextField
          id="standard"
          label="TSSPDCL"
          placeholder='TSSPDCL'
          helperText=""
        >
        </TextField>

         <b>Region :</b><TextField
          id="outlined-select"
          select
          name='region'
          label=""
          value={region}
          onChange={handleChange}
          helperText=""
        >
          {regions.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
    
        <b>Circle :</b><TextField
          id="outlined-select"
          select
          label=""
          value={circle}
          onChange={handleChange1}
          helperText=""
        >
          {circles.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        </div>
  
        
<div><b>Division:</b><TextField
          id="outlined-select"
          select
          label=""
          value={division}
          onChange={handleChange2}
          helperText=""
        >
          {divisions.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        <b>Sub_division:</b><TextField
          id="outlined-select"
          select
          label=""
          value={sub_division}
          onChange={handleChange3}
          helperText=""
        >
          {sub_divisions.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
&nbsp;&nbsp;<TextField
          id="outlined-select"
          select
          label="select section"
          value={section}
          onChange={handleChange4}
    
          helperText=""
        >
          {sections.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

      </div>
    </Box>
    
  );
}
