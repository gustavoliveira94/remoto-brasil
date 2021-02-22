import type { AppProps } from 'next/app';
import Head from 'next/head';

import GlobalStyles from 'styles/global';

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title>Remoto Brasil - Vagas totalmente remotas</title>
      <link rel="manifest" href="/manifest.json" />
      <meta
        name="description"
        content="Uma plataforma de vagas remotas de Front End e Back End"
      />
    </Head>
    <GlobalStyles />
    <Component {...pageProps} />
  </>
);

export default App;
