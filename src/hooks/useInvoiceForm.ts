'use client';
import { useFormik } from 'formik';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { invoicePrefix } from 'src/constants/invoice.constant';
import {
  addInvoiceInitialValues,
  addInvoiceSchema,
} from 'src/lib/schemas/addInvoiceSchema';
import { useAppStore } from 'src/lib/store/appStore';
import { Invoice } from 'src/lib/types/invoice.type';
import { getRandomId } from 'src/utils/number';

let showAlertTimeout: number;

const useInvoiceForm = (editMode: boolean = false) => {
  const params = useParams();
  const [invoiceId, setInvoiceId] = useState('');
  useEffect(() => {
    setInvoiceId(params.id as string);
  }, [params.id]);

  const [showAlert, setShowAlert] = useState(false);
  const { invoices, setInvoices } = useAppStore((state) => state);
  const {
    values,
    touched,
    setFieldValue,
    handleChange,
    isSubmitting,
    errors,
    handleSubmit,
    setValues,
  } = useFormik<Invoice>({
    enableReinitialize: true,
    initialValues: addInvoiceInitialValues,
    onSubmit: async (values, { resetForm }) => {
      const cleanUpNumber = String(values.number).replace(/^0+/, '');
      const cleanUpAmount = String(values.amount).replace(/^0+/, '');
      clearTimeout(showAlertTimeout);
      const invoiceNumber = `${invoicePrefix}${cleanUpNumber}`;
      const newInvoice: Invoice = {
        ...values,
        id: getRandomId(),
        number: invoiceNumber,
        amount: +cleanUpAmount,
      };
      const newInvoices =
        editMode && invoiceId
          ? invoices.map((inv) => (inv.id === +invoiceId ? newInvoice : inv))
          : [...invoices, newInvoice];

      setInvoices(newInvoices);
      setShowAlert(true);
      resetForm();
      showAlertTimeout = window.setTimeout(() => {
        setShowAlert(false);
      }, 3000);
      setTimeout(() => {
        window.scrollTo(0, document.body.scrollHeight);
      }, 100);
    },
    validationSchema: addInvoiceSchema,
  });

  useEffect(() => {
    if (!editMode || !invoiceId) return;
    const invoiceDetail = invoices.find((invoice) => invoice.id === +invoiceId);
    const number = invoiceDetail?.number as string;
    setValues({
      ...(invoiceDetail as Invoice),
      ...(invoiceDetail?.date && { date: new Date(invoiceDetail?.date) }),
      number: number?.split?.(invoicePrefix)?.[1],
      status: invoiceDetail?.status ?? '-',
    });
  }, [editMode, invoiceId, invoices, setValues]);

  return {
    values,
    touched,
    setFieldValue,
    handleChange,
    isSubmitting,
    errors,
    handleSubmit,
    showAlert,
  };
};

export default useInvoiceForm;
