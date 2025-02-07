import {
  ChevronLeft,
  Menu,
  NotificationsOutlined,
  SmsOutlined,
} from '@mui/icons-material';
import { Avatar, Box, Drawer, Switch, Typography } from '@mui/material';
import React, { useState } from 'react';
import { navbarSx as sx } from './navbar.style';
import { SidebarContent } from '../sidebar';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => {
    setOpen(newOpen);
  };

  return (
    <Box component="nav" sx={sx.nav}>
      <Box sx={sx.sidebarIcon}>
        <Typography component="span" onClick={() => toggleDrawer(true)}>
          <Menu />
        </Typography>
        <Drawer open={open} onClose={() => toggleDrawer(false)}>
          <Box sx={sx.mobileSidebar}>
            <SidebarContent />
          </Box>
        </Drawer>
      </Box>
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
