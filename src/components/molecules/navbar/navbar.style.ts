'use client';

import { AsSxObject } from 'src/lib/types/asSxObject.type';

export const navbarSx = AsSxObject({
  sidebarIcon: {
    display: {
      xs: 'block',
      md: 'none',
    },
    cursor: 'pointer',
    marginRight: 'auto',
  },
  mobileSidebar: {
    background: '#1c2434',
    minWidth: '300px',
    minHeight: '100svh',
    color: '#FFF',
    p: 3,
  },
  nav: {
    display: 'flex',
    justifyContent: 'flex-end',
    background: '#FFF',
    alignItems: 'center',
    gap: '22px',
    padding: '12px',
  },

  iconWrapper: {
    background: '#EFF4FB',
    height: '32px',
    width: '32px',
    borderRadius: '50%',
    display: 'grid',
    placeItems: 'center',
    position: 'relative',
    border: '.5px solid #D5DBE3',
  },
  icon: {
    color: '#64748b',
    fontSize: '16px',
  },
  dotWrapper: {
    background: '#FFF',
    position: 'absolute',
    top: '0px',
    right: '0px',
    padding: '2px',
    borderRadius: '50%',
  },
  dot: {
    width: '6px',
    height: '6px',
    borderRadius: '50%',
    background: '#DC3545',
  },
  profile: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    textAlign: 'end',
  },
  name: {
    fontSize: '14px',
  },
  status: {
    color: '#637381',
    fontSize: '12px',
  },
  chevron: {
    rotate: '-90deg',
    color: '#64748b',
  },
});
