export enum InvoiceStatusType {
  paid = 'Paid',
  unpaid = 'Unpaid',
  pending = 'Pending',
}

export type Invoice = {
  id: number;
  name: string;
  number: number | string;
  date: Date | null;
  amount: number;
  status: InvoiceStatusType | string;
};
