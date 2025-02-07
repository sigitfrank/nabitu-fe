'use client';
import React from 'react';
import {
  Box,
  Card,
  CardContent,
  MenuItem,
  Popover,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from '@mui/material';
import { listPageSx as sx } from './page.style';
import Content from 'src/components/molecules/content';
import useListInvoicePage from 'src/hooks/useListInvoicePage';
import { format } from 'date-fns';
import { Delete, Edit, Reorder, Search } from '@mui/icons-material';
import { numberWithPoint } from 'src/utils/number';
import InvoiceStatus from 'src/components/atoms/invoiceStatus';
import { InvoiceStatusType } from 'src/lib/types/invoice.type';
import { useRouter } from 'next/navigation';

const AddInvoicePage = () => {
  const {
    invoiceStatus,
    handleChangeStatus,
    handleSearch,
    handleDelete,
    search,
    filteredInvoices,
  } = useListInvoicePage();

  return (
    <Content>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        mb={4}
      >
        <Typography sx={sx.title} variant="h5">
          My Invoices
        </Typography>
        <Box display="flex" gap="16px">
          <TextField
            slotProps={{
              input: {
                startAdornment: <Search sx={{ mr: 1 }} />,
              },
            }}
            placeholder="Search"
            value={search}
            onChange={handleSearch}
            sx={sx.textField}
          />
          <Select
            value={invoiceStatus}
            name="status"
            onChange={handleChangeStatus}
            sx={sx.textField}
          >
            <MenuItem value="-">All Status</MenuItem>
            {Object.values(InvoiceStatusType).map((status) => (
              <MenuItem key={status} value={status}>
                {status}
              </MenuItem>
            ))}
          </Select>
        </Box>
      </Box>
      <Card variant="outlined" sx={sx.card}>
        <CardContent sx={sx.cardContent}>
          <TableContainer>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead sx={sx.tableHead}>
                <TableRow>
                  <TableCell sx={sx.cell}>Invoice</TableCell>
                  <TableCell sx={sx.cell}>Due Date</TableCell>
                  <TableCell sx={sx.cell}>Status</TableCell>
                  <TableCell sx={sx.cell}>Amount</TableCell>
                  <TableCell align="center" sx={sx.cell}>
                    Action
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredInvoices.map((row) => (
                  <TableRow
                    key={row.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row" sx={sx.cell}>
                      <Typography>{row.name}</Typography>
                      <Typography component="small" sx={sx.inv}>
                        {row.number}
                      </Typography>
                    </TableCell>
                    <TableCell sx={sx.cell}>
                      {format(row.date!, 'MMM dd,yyyy')}
                    </TableCell>
                    <TableCell sx={sx.cell}>
                      <InvoiceStatus status={row.status as InvoiceStatusType} />
                    </TableCell>
                    <TableCell sx={sx.cell}>
                      Rp {numberWithPoint(row.amount)}
                    </TableCell>
                    <TableCell align="center" sx={sx.cell}>
                      <Action id={row.id} handleDelete={handleDelete} />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
    </Content>
  );
};

export default AddInvoicePage;

const Action = ({
  id,
  handleDelete,
}: {
  id: number;
  handleDelete: (id: number) => void;
}) => {
  const router = useRouter();
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null,
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  return (
    <>
      <Typography component="span" onClick={handleClick}>
        <Reorder sx={sx.action} />
      </Typography>
      <Popover
        id={id.toString()}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Box padding={1} display="flex" gap={1}>
          <Typography
            component="span"
            sx={{ cursor: 'pointer' }}
            onClick={() => router.push(`/invoices/edit/${id}`)}
          >
            <Edit color="info" />
          </Typography>
          <Typography
            component="span"
            sx={{ cursor: 'pointer' }}
            onClick={() => handleDelete(id)}
          >
            <Delete color="error" />
          </Typography>
        </Box>
      </Popover>
    </>
  );
};
