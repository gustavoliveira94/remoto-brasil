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
      {/* <link rel="manifest" href="/manifest.json" /> */}
      <meta
        name="description"
        content="Remoto Brasil - Uma plataforma de vagas remotas de Front End e Back End"
      />
      <meta name="keywords" content="remoto, home-office, home office, front end, back end, front-end, back-end, vagas remotas" />

      <meta property="og:title" content="Remoto Brasil - Vagas totalmente remotas!" />
      <meta property="og:description" content="Remoto Brasil - Uma plataforma de vagas remotas de Front End e Back End" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://remoto-brasil.com.br" />
      <meta property="og:site_name" content="Remoto Brasil" />

      <meta property="twitter:url" content="https://remoto-brasil.com.br" />
      <meta property="twitter:title" content="Remoto Brasil - Vagas totalmente remotas!" />
      <meta property="twitter:description" content="Remoto Brasil - Uma plataforma de vagas remotas de Front End e Back End" />
    </Head>
    <ReposProvider>
      <GlobalStyles />
      <Component {...pageProps} />
    </ReposProvider>
  </>
);

export default App;
