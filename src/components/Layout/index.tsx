import React from 'react';
import Link from 'next/link';

import { Header, Footer } from 'styles/components/header';

const Layout: React.FC = ({ children }) => (
  <>
    <Header>
      <Link href="/">
        <a>
          <h1>{'<REMOTO BRASIL />'}</h1>
        </a>
      </Link>
    </Header>
    {children}
    <Footer>
      <p>
        Feito de madrugada por
        {' '}
        <a target="_blank" rel="noreferrer" href="https://github.com/gustavoliveira94">Gustavo Oliveira</a>
      </p>
    </Footer>
  </>
);

export default Layout;
