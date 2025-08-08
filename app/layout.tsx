import './globals.css';
import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Bella Beauty - Professional Ladies Makeup Salon',
  description: 'Transform your natural beauty with our expert makeup artists. Bridal makeup, special events, professional looks, and makeup lessons. Book your appointment today!',
  keywords: 'makeup, beauty salon, bridal makeup, professional makeup, makeup artist, beauty services',
  openGraph: {
    title: 'Bella Beauty - Professional Ladies Makeup Salon',
    description: 'Transform your natural beauty with our expert makeup artists. Professional makeup services for all occasions.',
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
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}