import * as React from 'react';
import { Box, TextField, AppBar, Toolbar, Typography, IconButton, Chip, Stack } from "@mui/material";
import Radio from '@mui/material/Radio';
import { Grid } from '@mui/material';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import ContainedButtons from '../components/Button';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { styled, alpha } from '@mui/material/styles';
import HomeIcon from '@mui/icons-material/Home';
import Link from '@mui/material/Link';
import Form from './DropDown';
import SplitButton from '../components/Show5';
import CustomizedTables from '../components/DataTable'


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));


function Demand() {
    return(
      <><Box sx={{ flexGrow: 1 }}>
                    <AppBar position="static">
                        <Toolbar variant="dense">
                        <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          <HomeIcon/>
          </IconButton>
                            <Typography variant="h6" color="inherit" component="div">
                               On Demand<br></br>
                                Load Reconnect
                            </Typography>
                        </Toolbar>
                    </AppBar>
                </Box>
                
                <FormControl>
      
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="Load Reconnect" />
        <FormControlLabel value="male" control={<Radio />} label="Load Disconnect" />
      </RadioGroup>
    </FormControl>

    <Form/>
                
 
      <Typography><h3>Single Meter Status</h3></Typography>
      <TextField id="standard-basic" label="Enter Meter Number*" variant="standard"  /> 
       <Link href="#">CheckStatus</Link>
      <Grid container direction="row" alignItems="center"/>
      <Stack spacing={2} direction="row" justifyContent="right">
      <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' ,style: { textAlign: 'center' }}}
            />
          </Search>
          </Stack>
       <createData/> <SplitButton/> <CustomizedTables/> <ContainedButtons/>
      </>
      
    );
  }

  export default Demand;