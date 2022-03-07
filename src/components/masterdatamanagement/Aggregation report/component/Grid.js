import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import SelectTextFields from './aggregateTextField';
import SelectTextFields1 from './aggregateTextfield1'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
  return (
      
    <Box sx={{ flexGrow: 1 }} style={{paddingTop:"30px"  }}  
  >  
      <Grid container spacing={8} direction="row" justifyContent="center" alignContent="center"   >
        <Grid item  xs={10}>
          <Item><SelectTextFields1/></Item>   
        </Grid>
        <Grid item xs={10} >
          <Item><SelectTextFields/>
          </Item>
         
        </Grid>
        
      </Grid>
    </Box>
  
  );
}
