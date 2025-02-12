import * as React from 'react';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '@/app/theme';
import { Metadata } from 'next';

// TypeScript declaration for window and dataLayer
declare global {
  interface Window {
    dataLayer: any[];
  }
}

export const metadata: Metadata = {
  title: 'Ben Humphries',
  description: 'Portfolio website for Ben Humphries',
}

export default function RootLayout(props: { children: React.ReactNode }) {
  React.useEffect(() => {
    // Google Analytics Script
    const script = document.createElement('script');
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-X2N5LP7204';
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      window.dataLayer = window.dataLayer || [];
      function gtag(...args: any[]) {
        window.dataLayer.push(args);
      }
      gtag('js', new Date());
      gtag('config', 'G-X2N5LP7204');
    };

    return () => {
      // Clean up if component unmounts
      document.head.removeChild(script);
    };
  }, []);

  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {props.children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
