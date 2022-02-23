import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import HomeIcon from '@mui/icons-material/Home';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { CssBaseline, IconButton } from '@mui/material';
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
fixedElement:{
  position: 'fixed',
  top:'69px',
  width:'94%',
  background: '#CECED0',
  borderRadius:'30px' 
  
}
});
export default function SearchAppBar() {
  const classes = useStyles();
  return (
    <div>
<br/>
<CssBaseline />
<br/>
<div >
  <br/>

<AppBar elevation={12} className={classes.fixedElement}>

<Toolbar>
  <IconButton size="large" edge="start" color="inherit" aria-label="open drawer">
  <HomeIcon style={{ color: 'black' }} />
  </IconButton>
  <IconButton size="large" edge="start" color="inherit" aria-label="open drawer">
  <ChevronRightIcon style={{ color: 'black' }} />
  </IconButton>
  <Typography style={{ color: 'black' }}>Configurables</Typography>
  <IconButton style={{ marginLeft: '0px' }} size="large" edge="start" color="inherit" aria-label="open drawer">
  <ChevronRightIcon style={{ color: 'black' }} />
  </IconButton>
  <Typography style={{ marginRight: 'auto', marginLeft: '0px', color: 'black' }} variant='h6'>Meter Parameters</Typography>
</Toolbar>

</AppBar>
</div>
  </div>
  );
}

