import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box'

export default function ContainedButtons() {
  return (
    <Box textAlign='center'>
    <Stack spacing={2} direction="row" justifyContent="right">
      <Button variant="contained" href="#contained-buttons"  >
       Previous
      </Button>
      <Button variant="contained" href="#contained-buttons" >
       Next
      </Button>
    </Stack>
    </Box>
  );
}
