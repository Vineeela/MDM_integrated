import * as React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Typography, AppBar, CssBaseline, Toolbar, IconButton } from '@mui/material';

const ResponsiveAppBar = () => {

	return (
		<div>

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
        <Typography style={{ marginRight: 'auto', marginLeft: '0px',color:'black' }} variant='h6'>Asset Management - Commissioned Meters</Typography>
      </Toolbar>
      
    </AppBar>
		</div>
	);
};
export default ResponsiveAppBar;
