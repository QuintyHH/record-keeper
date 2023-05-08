import type { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';

import { ThemeProvider } from '@features/Layout';

const AppComponent = ({ Component, pageProps }: AppProps): React.ReactElement => (
    <ThemeProvider theme="light">
      <Head>
        <title>Record Keeper</title>
        <meta content="An application to keep track of owned vinyls." name="description" />
        <link href="/favicon.ico" rel="icon" />
        <link href="/favicon.ico" rel="apple-touch-icon" sizes="72x72" />
        <meta content="width=device-width, initial-scale=1, maximum-scale=5" name="viewport" />
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  );

export default AppComponent;
