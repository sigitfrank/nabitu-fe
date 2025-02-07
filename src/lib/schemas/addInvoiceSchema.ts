'use client';

import * as Yup from 'yup';
import { Invoice, InvoiceStatusType } from '../types/invoice.type';

export const addInvoiceSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  number: Yup.number()
    .required('Number is required')
    .positive('Number must be positive')
    .typeError('Value must be number'),
  date: Yup.date().nullable().required('Date is required'),
  amount: Yup.number()
    .required('Amount is required')
    .positive('Amount must be positive')
    .typeError('Value must be number'),
  status: Yup.mixed<InvoiceStatusType | string>()
    .oneOf(
      [
        InvoiceStatusType.paid,
        InvoiceStatusType.pending,
        InvoiceStatusType.unpaid,
      ],
      'Status is required',
    )
    .required('Status is required'),
});

export const addInvoiceInitialValues: Invoice = {
  id: 0,
  name: '',
  number: 0,
  date: null,
  amount: 0,
  status: '-',
};
