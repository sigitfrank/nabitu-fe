'use client';

import { AsSxObject } from 'src/lib/types/asSxObject.type';

export const listPageSx = AsSxObject({
  title: {
    fontWeight: 'bold',
    marginBottom: '24px',
  },
  card: {
    borderColor: '#E2E8F0',
  },
  cardContent: {
    padding: 0,
  },
  tableHead: {
    background: '#F7F9FC',
  },
  cell: {
    borderColor: '#EEE',
  },
  inv: {
    fontSize: '12px',
    color: '#64748b',
  },
  action: {
    color: '#64748b',
    cursor: 'pointer',
  },
  textField: {
    borderRadius: '16px',
    '& fieldset': {
      border: 'none',
    },
    background: '#FFF',
  },
});
