/* eslint-disable camelcase */
import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';

import GlobalStyles from 'styles/global';

import ReposProvider from 'contexts/ReposProvider';

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title>Remoto Brasil - Vagas totalmente remotas!</title>
      <link rel="manifest" href="/manifest.json" />
      <meta
        name="description"
        content="Uma plataforma de vagas remotas de Front End e Back End"
      />
    </Head>
    <ReposProvider>
      <GlobalStyles />
      <Component {...pageProps} />
    </ReposProvider>
  </>
);

export default App;
