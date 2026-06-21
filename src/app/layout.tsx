import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { Nav } from '@/components/layout/Nav';
import { Footer } from '@/components/layout/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://getform.co.uk'),
  title: 'FORM. — Face Performance System',
  description:
    'Not skincare. Not makeup. The hybrid system that delivers results today and transforms your skin by week six.',
  openGraph: {
    title: 'FORM. — Face Performance System',
    description: 'Results today. Transformation by week six.',
    images: ['/og-image.png'],
    url: 'https://getform.co.uk',
  },
  twitter: { card: 'summary_large_image' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-form-black text-form-white font-sans antialiased">
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
