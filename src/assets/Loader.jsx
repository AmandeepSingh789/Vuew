import React from 'react';
import { Box, CircularProgress, Stack } from '@mui/material';

const Loader = () =>  (
  <Box minHeight="95vh">
    <Stack direction='row' justifyContent='flex-start' alignItems='flex-start' height='80vh' >
      <CircularProgress />
    </Stack>
  </Box>
);

export default Loader;