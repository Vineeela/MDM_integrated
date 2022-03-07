import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const years = [
  {
    value: 'id1',
    label:  "2000"
  },
  {
    value: 'id2',
    label: "2001"
  },
  {
    value: 'id3',
    label: '2002'
  },
  {
    value: 'id4',
    label: '2003'
  },
  
  {
    value: 'id5',
    label: '2004'
  }
  
];

// months
const months = [
  {
    value: 'id1',
    label:  "january"
  },
  {
    value: 'id2',
    label: "february"
  },
  {
    value: 'id3',
    label: 'march'
  },
  {
    value: 'id4',
    label: 'april'
  },
  
  {
    value: 'id5',
    label: 'may'
  }
  ,
  {
    value: 'id6',
    label: 'june'
  },
  {
    value: 'id7',
    label: 'july'
  }
  ,
  {
    value: 'id8',
    label: 'august'
  }
  ,
  {
    value: 'id9',
    label: 'september'
  },
  {
    value: 'id10',
    label: 'october'
  }
  ,
  {
    value: 'id11',
    label: 'November'
  },
  {
    value: 'id12',
    label: 'December'
  }
  
  
  
  
];


const years1 = [
  {
    value: 'id1',
    label:  "2000"
  },
  {
    value: 'id2',
    label: "2001"
  },
  {
    value: 'id3',
    label: '2002'
  },
  {
    value: 'id4',
    label: '2003'
  },
  
  {
    value: 'id5',
    label: '2004'
  }
  
];

// commented by chiru

// months
const months1 = [
  {
    value: 'id1',
    label:  "january"
  },
  {
    value: 'id2',
    label: "february"
  },
  {
    value: 'id3',
    label: 'march'
  },
  {
    value: 'id4',
    label: 'april'
  },
  
  {
    value: 'id5',
    label: 'may'
  }
  ,
  {
    value: 'id6',
    label: 'june'
  },
  {
    value: 'id7',
    label: 'july'
  }
  ,
  {
    value: 'id8',
    label: 'august'
  }
  ,
  {
    value: 'id9',
    label: 'september'
  },
  {
    value: 'id10',
    label: 'october'
  }
  ,
  {
    value: 'id11',
    label: 'November'
  },
  {
    value: 'id12',
    label: 'December'
  }
  
];

// demostic
const demostics=[ {
  value: 'id10',
  label: 'non-demostic/commercial'
}
,
{
  value: 'id11',
  label: 'Demostic'
},
{
  value: 'id12',
  label: 'Industrial'
}


];

export default function SelectTextFields() {
  const [year, setYear] = React.useState('id1');
  const [month,setMonth]=React.useState("id1");

  const [year1, setYear1] = React.useState('id1');
  const [month1,setMonth1]=React.useState("id1");
  const [demo,setDemo]=React.useState("id10");
 
  const handleChange = (event) => {
    setYear(event.target.value);
  };
const handleChange1=(e1)=>{
  setMonth(e1.target.value);
}
const handleChange2 = (event) => {
  setYear1(event.target.value);
};
const handleChange3=(e1)=>{
setMonth1(e1.target.value);

}
;
const handleChange4=(e2)=>{
  setDemo(e2.target.value);
}
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

          <b>From</b>  &nbsp;&nbsp;
        
        <TextField
          id="outlined-select"
          select
          label=""
          value={year}
          onChange={handleChange}
          helperText="Please select year"
        >
          {years.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
          &nbsp;&nbsp;
        
        <TextField
          id="outlined-select"
          select
          label=""
          value={month}
          onChange={handleChange1}
          helperText="Please select month"
        >
          {months.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        
    

        &nbsp;&nbsp;<b>To</b> &nbsp;&nbsp;
        
        <TextField
          id="outlined-select"
          select
          label=""
          value={year1}
          onChange={handleChange2}
          helperText="Please select year"
        >
          {years1.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
          &nbsp;&nbsp;
        
        <TextField
          id="outlined-select"
          select
          label=""
          value={month1}
          onChange={handleChange3}
          helperText="Please select month"
        >
          {months1.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        
 
        &nbsp;&nbsp;
        
        <TextField
          id="outlined-select"
          select
          label=""
          value={demo}
          onChange={handleChange4}
          helperText="Please select "
        >
          {demostics.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        
      </div>

      
      <Stack spacing={2} direction="row" alignContent='center' justifyContent='center'>
      
      <Button variant="contained">submit</Button>
      <Button variant="contained">Clear</Button>
      
    </Stack>

    </Box>
  );
          }
         
