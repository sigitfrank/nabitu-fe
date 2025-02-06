'use client';

import * as React from 'react';
import { dashboardSx as sx } from './dashboard.style';
import { Box } from '@mui/material';
import Navbar from 'src/components/molecules/navbar';
import Sidebar from 'src/components/molecules/sidebar';

export default function DashboardPagesLayout(props: {
  children: React.ReactNode;
}) {
  return (
    <Box sx={sx.root}>
      <Sidebar />
      <Box
        sx={{
          flexGrow: 1,
        }}
      >
        <Navbar />
        {props.children}
      </Box>
    </Box>
  );
}
