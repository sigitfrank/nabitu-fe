import { Box } from '@mui/material';
import React from 'react';
import { InvoiceStatusType } from 'src/lib/types/invoice.type';
import { invoiceStatusSx as sx } from './invoiceStatus.style';

type InvoiceStatusProps = {
  status: InvoiceStatusType;
};
const InvoiceStatus = ({ status }: InvoiceStatusProps) => {
  const lowerCaseStatus = status.toLowerCase() as keyof typeof sx;
  const sxStatus = sx[lowerCaseStatus];
  return (
    <Box component="span" sx={{ ...sx.base, ...sxStatus }}>
      {status}
    </Box>
  );
};

export default InvoiceStatus;
