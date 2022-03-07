import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import SvgIconsColor from './Icon';
//import ContainedButtons from './Button'
export default function DenseAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static"  style={{ background: "#4d9084",borderRadius:'30px' }}>
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
         < SvgIconsColor/>
          </IconButton>
         
          <Typography variant="h6" color="inherit" component="div" style={{textAlign:"start"}}>
            <small>Aggregation</small><br></br>Areawise consumption

          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
