import React from 'react';
import { sidebarSx as sx } from './sidebar.style';
import { Box, Typography } from '@mui/material';
import { SIDE_MENUS } from 'src/constants/dashboard.constant';
import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';

const Sidebar = () => {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <Box sx={sx.sidebar}>
      <Box sx={sx.appHeader}>
        <Image
          src="/assets/logo.png"
          width={200}
          height={200}
          alt="logo"
          style={sx.logo}
        />
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
                onClick={() => router.push(`/invoices/${menu.segment}`)}
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
