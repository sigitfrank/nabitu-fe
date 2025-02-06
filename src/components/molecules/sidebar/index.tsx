import React from 'react';
import { sidebarSx as sx } from './sidebar.style';
import { Box, Typography } from '@mui/material';
import { LogoDev } from '@mui/icons-material';
import { SIDE_MENUS } from 'src/constants/dashboard.constant';
import { usePathname, useRouter } from 'next/navigation';
const Sidebar = () => {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <Box sx={sx.sidebar}>
      <Box sx={sx.appHeader}>
        <LogoDev sx={sx.logo} />
        <Typography sx={sx.appName}>InvoiceHub</Typography>
      </Box>
      <Box sx={sx.listWrapper}>
        <Typography sx={sx.menuLabel}>Menu</Typography>
        <Box component="ul" sx={sx.list}>
          {SIDE_MENUS.map((menu) => {
            const activeMenu = pathname.includes(menu.segment);
            return (
              <Box
                component="li"
                sx={{ ...sx.listItem, ...(activeMenu && sx.listItemActive) }}
                key={menu.segment}
                onClick={() => router.push(menu.segment)}
              >
                <menu.icon />
                <Typography>{menu.label}</Typography>
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
