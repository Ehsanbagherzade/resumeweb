import type { Metadata, Viewport } from 'next';
import './globals.css';
import React from 'react';
import Header from '@/app/header/header';
import ThemeProvider from '@/theme/theme-provider';
import theme from '@/theme/theme';
import { LanguageProvider } from '@/contexts/languagecontext';
import AppWrapper from '@/components/appwrapper';

export const metadata: Metadata = {
  title: 'وبسایت رزومه شخصی احسان باقرزاده',
  description: 'وبسایت رزومه شخصی احسان باقرزاده',
  icons: {
    icon: '/ehsan.ico',
    shortcut: '/Img_9000.jpg',
  },
};
export const viewport: Viewport = {
  initialScale: 1,
  width: 'device-width',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        <LanguageProvider>
          <AppWrapper>
            <ThemeProvider theme={theme}>
              <Header />
              {children}
            </ThemeProvider>
          </AppWrapper>
        </LanguageProvider>
      </body>
    </html>
  );
}
