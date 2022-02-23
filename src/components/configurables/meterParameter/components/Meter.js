import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';
import Stack from '@mui/material/Stack';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';


const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
  color: theme.palette.text.secondary,
}));
export default function SelectTextFields() {

  return (
    <Paper style={{ borderRadius: 20 }}>

      <Box sx={{ width: '100%' }}>
        <Typography variant="h5" gutterBottom pl={2} pt={1}>Abstract Values</Typography>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <Typography pl={2}>Real Time Clock, Date And Time<TextField sx={{
              '& > :not(style)': { m: 1, width: '25ch' },
            }}
              required
              id="standard-required"
              variant="standard"
              select
            /></Typography>

          </Grid>
          <Grid item xs={6}>
            <Typography pl={2}>RS 485 Device Address<TextField sx={{
              '& > :not(style)': { m: 1, width: '25ch' },
            }}
              required
              id="standard-required"
              variant="standard"
              select
            /></Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography pl={2}>Activity Calendar For Time Zones</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography pl={2}>Single Action Schedule For Billing Dates</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography pl={2}>Image Transfer</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography pl={2}>LLS Secret</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography pl={2}>HLS Key</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography pl={2}>Global Key Change</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography pl={2}>Image Activation Single Action Schedule</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography pl={2}>ESWF</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography pl={2}>Metering Mode<TextField sx={{
              '& > :not(style)': { m: 1, width: '25ch' },
            }}
              required
              id="standard-required"
              variant="standard"
              select
            /></Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography pl={2}>MD Reset</Typography>
          </Grid>


        </Grid>
        <Typography variant="h5" gutterBottom pt={2} pl={2}>Electrical Values</Typography>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>

            <Typography px={2}>Demand Integration Period<TextField sx={{
              '& > :not(style)': { m: 1, width: '25ch' },
            }}
              required
              id="standard-required"
              variant="standard"
              select
            /></Typography>

          </Grid>
          <Grid item xs={6}>
            <Typography px={2}>Profile Capture Period<TextField sx={{
              '& > :not(style)': { m: 1, width: '25ch' },
            }}
              required
              id="standard-required"
              variant="standard"
              select
            /></Typography>

          </Grid>

          <Grid item xs={6}>
            <Typography px={2}>Measuring Algorithm For Active Power<TextField sx={{
              '& > :not(style)': { m: 1, width: '25ch' },
            }}
              required
              id="standard-required"
              variant="standard"
              select
            /></Typography>

          </Grid>
          <Grid item xs={6}>
            <Typography px={2}>Measuring Algorithm For Active Energy<TextField sx={{
              '& > :not(style)': { m: 1, width: '25ch' },
            }}
              required
              id="standard-required"
              variant="standard"
              select
            /></Typography>

          </Grid>

          <Grid item xs={6}>
            <Typography px={2}>Measuring Algorithm For Reactive Power<TextField sx={{
              '& > :not(style)': { m: 1, width: '25ch' },
            }}
              required
              id="standard-required"
              variant="standard"
              select
            /></Typography>

          </Grid>
          <Grid item xs={6}>
            <Typography px={2}>Measuring Algorithm For Reactive Energy<TextField sx={{
              '& > :not(style)': { m: 1, width: '25ch' },
            }}
              required
              id="standard-required"
              variant="standard"
              select
            /></Typography>

          </Grid>
          <Grid item xs={6}>
            <Typography px={2}>Measuring Algorithm For Apparent Power<TextField sx={{
              '& > :not(style)': { m: 1, width: '25ch' },
            }}
              required
              id="standard-required"
              variant="standard"
              select
            /></Typography>

          </Grid>
          <Grid item xs={6}>
            <Typography px={2}>Measuring Algorithm For Apparent Energy<TextField sx={{
              '& > :not(style)': { m: 1, width: '25ch' },
            }}
              required
              id="standard-required"
              variant="standard"
              select
            /></Typography>
          </Grid>
          <Grid item xs={6} sm={12}>
            <Typography px={2}>Measuring Algorithm For Power Factory<TextField sx={{
              '& > :not(style)': { m: 1, width: '25ch' },
            }}
              required
              id="standard-required"
              variant="standard"
              select
            /></Typography>
          </Grid>
        </Grid>
        <Grid item xs={12} md={12} pt={2} pb={2}>
          <Stack spacing={2} direction="row" justifyContent="center">
            <Button variant="contained" color="success" >SUBMIT </Button>
            <Button variant="contained">CLEAR</Button>
          </Stack>
        </Grid>
      </Box>
    </Paper>

  );
}