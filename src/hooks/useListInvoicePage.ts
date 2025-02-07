/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import { SelectChangeEvent } from '@mui/material';
import { format } from 'date-fns';
import { ReactNode, useMemo, useState } from 'react';
import { useAppStore } from 'src/lib/store/appStore';
import { InvoiceStatusType } from 'src/lib/types/invoice.type';

const useListInvoicePage = () => {
  const [search, setSearch] = useState('');
  const [invoiceStatus, setInvoiceStatus] = useState<
    string | InvoiceStatusType
  >('-');
  const { invoices, setInvoices } = useAppStore((state) => state);

  const handleSearch = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setSearch(e.target.value);
  };

  const handleChangeStatus = (
    e: SelectChangeEvent<unknown>,
    _child: ReactNode,
  ) => {
    const target = e.target as EventTarget & { value: string };
    setInvoiceStatus(target.value);
  };

  const handleDelete = (id: number) => {
    const newInvoices = invoices.filter((invoice) => invoice.id !== id);
    setInvoices(newInvoices);
  };

  const filteredInvoices = useMemo(
    () =>
      invoices
        .filter((invoice) => {
          const matchesName = invoice.name
            .toLowerCase()
            .includes(search.toLowerCase());
          const matchesNumber = invoice.number
            .toString()
            .includes(search.toString());
          const matchesDate =
            invoice.date &&
            format(invoice.date, 'MMM dd,yyyy').includes(search);
          const matchesAmount = invoice.amount
            .toString()
            .includes(search.toString());
          return matchesName || matchesNumber || matchesDate || matchesAmount;
        })
        .filter(
          (invoice) =>
            invoiceStatus === '-' ||
            invoice.status.toLowerCase().includes(invoiceStatus.toLowerCase()),
        ),
    [search, invoices, invoiceStatus],
  );

  return {
    invoices,
    search,
    filteredInvoices,
    handleSearch,
    handleDelete,
    invoiceStatus,
    handleChangeStatus,
  };
};

export default useListInvoicePage;
