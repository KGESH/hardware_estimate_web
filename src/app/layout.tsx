import './globals.css';
import QueryProvider from '@/lib/reactQuery';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <QueryProvider>
        <body>{children}</body>
      </QueryProvider>
    </html>
  );
}
