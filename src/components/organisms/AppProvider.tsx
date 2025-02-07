'use client';

import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3';
import React, { ReactNode, useEffect } from 'react';
import { localStorageKey } from 'src/constants/key.constant';
import { useAppStore } from 'src/lib/store/appStore';

const AppProvider = ({ children }: { children: ReactNode }) => {
  const setInvoices = useAppStore((state) => state.setInvoices);

  useEffect(() => {
    const savedInvoices = localStorage.getItem(localStorageKey.invoices);
    const initialInvoices = savedInvoices ? JSON.parse(savedInvoices) : [];
    setInvoices(initialInvoices);
  }, [setInvoices]);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      {children}
    </LocalizationProvider>
  );
};

export default AppProvider;
