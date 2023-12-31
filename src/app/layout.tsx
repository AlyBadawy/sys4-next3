import GoogleAnalytics from '@/components/layout/GoogleAnalytics';
import { LayoutProps } from '@/types/props/layoutProp';
import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/layout/Header';
import { ThemeProvider } from '@/components/theme/ThemeProvider';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head>
        <GoogleAnalytics />
      </head>
      <body>
        <ThemeProvider attribute='class' defaultTheme='dark'>
          <Header />
          <main>{children}</main>
          {/* <Footer /> */}
        </ThemeProvider>
      </body>
    </html>
  );
}
