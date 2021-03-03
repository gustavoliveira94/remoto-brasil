/* eslint-disable no-return-assign */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { Header, Footer } from 'styles/components/header';

const Layout: React.FC = ({ children }) => {
  const router = useRouter();

  return (
    <>
      <Header className="header">
        {router.pathname !== '/' && (
          <i className="fas fa-chevron-left" onClick={() => router.back()} />
        )}
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
};

export default Layout;
