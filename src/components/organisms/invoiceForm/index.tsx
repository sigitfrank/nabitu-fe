'use client';
import React from 'react';
import {
  Alert,
  AlertTitle,
  Box,
  Button,
  Card,
  CardContent,
  Grid2,
  InputAdornment,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { invoiceFormSx as sx } from './invoiceForm.style';
import Asterisk from 'src/components/atoms/asterisk';
import { CheckBox } from '@mui/icons-material';
import useInvoiceForm from 'src/hooks/useInvoiceForm';
import { InvoiceStatusType } from 'src/lib/types/invoice.type';
import TextError from 'src/components/atoms/textError';
import Content from 'src/components/molecules/content';

type InvoiceFormProps = {
  editMode?: boolean;
};

const InvoiceForm = ({ editMode }: InvoiceFormProps) => {
  const {
    values,
    touched,
    setFieldValue,
    handleChange,
    isSubmitting,
    errors,
    handleSubmit,
    showAlert,
  } = useInvoiceForm(editMode);

  return (
    <Content>
      <Typography sx={sx.title} variant="h5">
        {editMode ? 'Edit' : 'Add'} Invoice
      </Typography>

      <Card variant="outlined" sx={sx.card}>
        <CardContent sx={sx.cardContent}>
          <Typography sx={sx.subtitle}>Invoice Form</Typography>

          <Box component="form" sx={sx.form} onSubmit={handleSubmit}>
            <Grid2 container columnSpacing={4} rowSpacing={2}>
              <Grid2 size={{ md: 6 }}>
                <Box sx={sx.formGroup}>
                  <Typography sx={sx.formLabel}>
                    Name <Asterisk />
                  </Typography>
                  <TextField
                    value={values.name}
                    name="name"
                    onChange={handleChange}
                    placeholder="Enter your invoice name"
                    sx={sx.textField}
                    error={Boolean(touched.name && errors.name)}
                    helperText={touched.name ? errors.name : ''}
                  />
                </Box>
              </Grid2>
              <Grid2 size={{ md: 6 }}>
                <Box sx={sx.formGroup}>
                  <Typography sx={sx.formLabel}>
                    Number <Asterisk />
                  </Typography>
                  <TextField
                    value={values.number}
                    name="number"
                    onChange={handleChange}
                    placeholder="Enter your invoice number"
                    sx={sx.textField}
                    error={Boolean(touched.number && errors.number)}
                    helperText={touched.number ? errors.number : ''}
                  />
                </Box>
              </Grid2>
              <Grid2 size={{ md: 6 }}>
                <Box sx={sx.formGroup}>
                  <Typography sx={sx.formLabel}>
                    Due Date <Asterisk />
                  </Typography>
                  <DatePicker
                    sx={{
                      ...sx.textField,
                      ...(Boolean(touched.date && errors.date) &&
                        sx.textFieldError),
                    }}
                    value={values.date}
                    onChange={(value) => setFieldValue('date', value)}
                  />
                  {Boolean(touched.date && errors.date) && (
                    <TextError text={errors.date ?? ''} />
                  )}
                </Box>
              </Grid2>
              <Grid2 size={{ md: 6 }}>
                <Box sx={sx.formGroup}>
                  <Typography sx={sx.formLabel}>
                    Amount <Asterisk />
                  </Typography>
                  <TextField
                    slotProps={{
                      input: {
                        sx: sx.inputAdornment,
                        startAdornment: (
                          <InputAdornment position="start" sx={sx.adornment}>
                            <Typography sx={sx.adornmentLabel}>Rp</Typography>
                          </InputAdornment>
                        ),
                      },
                    }}
                    value={values.amount}
                    name="amount"
                    onChange={handleChange}
                    placeholder="Enter your invoice amount"
                    sx={sx.textField}
                    error={Boolean(touched.amount && errors.amount)}
                    helperText={touched.amount ? errors.amount : ''}
                  />
                </Box>
              </Grid2>
              <Grid2 size={{ md: 6 }}>
                <Box sx={sx.formGroup}>
                  <Typography sx={sx.formLabel}>
                    Status <Asterisk />
                  </Typography>
                  <Select
                    value={values.status}
                    name="status"
                    error={Boolean(touched.status && errors.status)}
                    onChange={handleChange}
                    sx={{
                      color: values.status === '-' ? '#b6b6b6' : '',
                    }}
                  >
                    <MenuItem value="-" disabled>
                      Choose a status
                    </MenuItem>
                    {Object.values(InvoiceStatusType).map((status) => (
                      <MenuItem key={status} value={status}>
                        {status}
                      </MenuItem>
                    ))}
                  </Select>
                  {Boolean(touched.status && errors.status) && (
                    <TextError text={errors.status ?? ''} />
                  )}
                </Box>
              </Grid2>
            </Grid2>
            <Box textAlign="end">
              <Button variant="contained" type="submit" loading={isSubmitting}>
                {editMode ? 'Update' : '+ Add'} Invoice
              </Button>
            </Box>
          </Box>
        </CardContent>
      </Card>

      {showAlert && (
        <Alert
          severity="success"
          sx={sx.alert}
          icon={<CheckBox sx={sx.alertIcon} />}
        >
          <AlertTitle sx={sx.alertTitle}>
            Invoice {editMode ? 'updated' : 'added'} successfully
          </AlertTitle>
          You can view and manage your invoice in the {"'"}My Invoices{"'"}{' '}
          section.
        </Alert>
      )}
    </Content>
  );
};

export default InvoiceForm;
