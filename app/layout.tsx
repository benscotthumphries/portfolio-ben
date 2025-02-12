import * as React from 'react';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '@/app/theme';
import { GoogleAnalytics } from '@next/third-parties/google'
// import Header from './components/header';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ben Humphries',
  description: 'Portfolio website for Ben Humphries',
}

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {/* <Header /> */}
            {props.children}
            <GoogleAnalytics gaId="G-X2N5LP7204" />
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}