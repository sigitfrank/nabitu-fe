import { AsSxObject } from 'src/lib/types/asSxObject.type';

export const sidebarSx = AsSxObject({
  sidebar: {
    background: '#1c2434',
    minWidth: '300px',
    minHeight: '100svh',
    color: '#FFF',
    p: 3,
  },
  appHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: 2,
  },
  logo: {
    width: '50px',
    height: '50px',
    mixBlendMode: 'screen',
  },
  appName: {
    fontWeight: 'bold',
    fontSize: '18px',
  },
  menuLabel: {
    color: '#9d9d9d',
    textTransform: 'uppercase',
    fontSize: '12px',
  },
  listWrapper: {
    marginTop: '42px',
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
    gap: '32px',
  },
  listItem: {
    display: 'flex',
    gap: '6px',
    color: '#9d9d9d',
    cursor: 'pointer',
    transition: '200ms',
    '&:hover': {
      color: '#FFF',
    },
  },
  listItemActive: {
    color: '#FFFF',
  },
});
