'use client';

import * as zustand from 'zustand';
import { Invoice } from '../types/invoice.type';
import { localStorageKey } from 'src/constants/key.constant';

type AppStore = {
  invoices: Invoice[];
  setInvoices: (invoices: Invoice[]) => void;
};

export const useAppStore = zustand.create<AppStore>((set) => {
  return {
    invoices: [],
    setInvoices: (invoices: Invoice[]) => set(() => ({ invoices })),
  };
});

export const unsubscribe = useAppStore.subscribe((state) => {
  const invoices = state.invoices;
  const stringifiedInvoices = JSON.stringify(invoices);
  localStorage.setItem(localStorageKey.invoices, stringifiedInvoices);
});
