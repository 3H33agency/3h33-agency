import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: '3h33 - Management & Booking',
  description: 'Premium nightlife artist management and event booking agency',
  openGraph: {
    title: '3h33 Agency',
    description: 'Management & Booking / The Night Social Network',
    url: 'https://3h33agency.fr',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-dark-900 text-grey-200 font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
