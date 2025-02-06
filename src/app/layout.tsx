import type { Metadata } from 'next';
import { Lato } from 'next/font/google';
import './globals.css';
import Dashboard from 'src/components/organisms/dashboard';

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  style: ['normal', 'italic'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'InvoiceHub',
  description:
    'InvoiceHub is a web app for managing invoices, allowing users to view and create invoices easily.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={lato.className}>
        <Dashboard>{children}</Dashboard>
      </body>
    </html>
  );
}
