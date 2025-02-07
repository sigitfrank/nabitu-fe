import { Box, Grid2 } from '@mui/material';
import React, { ReactNode } from 'react';
import { contentSx as sx } from './content.style';

const Content = ({ children }: { children: ReactNode }) => {
  return (
    <Box sx={sx.root}>
      <Grid2 container justifyContent="center">
        <Grid2
          size={{
            xs: 10,
          }}
        >
          {children}
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default Content;
