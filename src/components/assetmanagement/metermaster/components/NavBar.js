import { Typography, AppBar,  CssBaseline, Toolbar, IconButton, } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const NavBar=()=>{//Header
	return(
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
		  <Typography>Asset Management</Typography>
		  <IconButton style={{ marginLeft: '0px' }} size="large" edge="start" color="inherit" aria-label="open drawer">
			<ChevronRightIcon style={{ color: 'white' }} />
		  </IconButton>
		  <Typography style={{ marginRight: 'auto', marginLeft: '0px' }} variant='h6'>Meter Search</Typography>
		</Toolbar>
		
	  </AppBar>
	  <br/>
		</div>
  
	)
  }
  export default NavBar;