import { AsSxObject } from 'src/lib/types/asSxObject.type';

export const invoiceStatusSx = AsSxObject({
  base: {
    padding: '12px',
    borderRadius: '16px',
  },
  paid: {
    background: '#EDF7F1',
    color: '#219653',
  },
  unpaid: {
    background: '#FBF0F1',
    color: '#D34053',
  },
  pending: {
    background: '#FFF8EB',
    color: '#EE9C0A',
  },
});
