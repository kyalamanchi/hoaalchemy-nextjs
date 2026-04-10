import '@/styles/styles.css';
import Navbar from '@/components/Navbar';

export const metadata = {
  title: {
    default: 'HOA Alchemy — Modern Community Association Management Platform',
    template: '%s | HOA Alchemy',
  },
  description: 'Manage your community association with confidence using live location for onsite crews, financial transparency, and comprehensive HOA management tools.',
  metadataBase: new URL('https://www.hoaalchemy.com'),
  openGraph: {
    type: 'website',
    siteName: 'HOA Alchemy',
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
