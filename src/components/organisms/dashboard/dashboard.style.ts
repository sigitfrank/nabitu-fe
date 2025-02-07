import { AsSxObject } from 'src/lib/types/asSxObject.type';

export const dashboardSx = AsSxObject({
  root: {
    display: 'flex',
    width: '100%',
  },
  content: {
    flexGrow: 1,
    width: 'calc(100% - 300px)',
  },
});
