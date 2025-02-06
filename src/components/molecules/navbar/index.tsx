import {
  ChevronLeft,
  NotificationsOutlined,
  SmsOutlined,
} from '@mui/icons-material';
import { Avatar, Box, Switch, Typography } from '@mui/material';
import React from 'react';
import { navbarSx as sx } from './navbar.style';

const Navbar = () => {
  return (
    <Box component="nav" sx={sx.nav}>
      <Switch />
      <Box display="flex" gap="12px">
        <Box component="span" sx={sx.iconWrapper}>
          <NotificationsOutlined sx={sx.icon} />
        </Box>
        <Box component="span" sx={sx.iconWrapper}>
          <SmsOutlined sx={sx.icon} />
          <Box sx={sx.dotWrapper}>
            <Box sx={sx.dot}></Box>
          </Box>
        </Box>
      </Box>

      <Box sx={sx.profile}>
        <Box>
          <Typography sx={sx.name}>John Doe</Typography>
          <Typography sx={sx.status}>Verified Member</Typography>
        </Box>
        <Box display="flex" gap="4px" alignItems="center">
          <Avatar src="/assets/profile.jpg" />
          <ChevronLeft sx={sx.chevron} />
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
