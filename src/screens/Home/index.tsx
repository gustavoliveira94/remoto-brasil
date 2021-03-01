/* eslint-disable camelcase */
import React, { useContext } from 'react';
import Link from 'next/link';

import { ReposContext } from 'contexts/ReposProvider';

import {
  About, Indicate, Repositories,
} from 'styles/home';

const Home: React.FC = () => {
  const { repos } = useContext(ReposContext);

  return (
    <>
      <About>
        <div>
          <button type="button">
            <i className="fas fa-code-branch" />
            <p>Sobre</p>
          </button>
        </div>
        <div>
          <span>README.md</span>
          <h2>SOBRE A REMOTO BRASIL</h2>
          <hr />
          <p>
            Olá, sejam bem vindos ao
            {' '}
            <b>Remoto Brasil</b>
            .
            {' '}
            <br />
            Essa iniciativa tem o objetivo de unir repositórios do Github que divulgam vagas na área de programação e filtrar somente as que são REMOTAS.
            Sintam-se à vontade para indicar novos repositórios de divulgação de vagas no botão abaixo.
          </p>
        </div>
      </About>
      <Indicate>
        <a href="https://github.com/remoto-brasil/repositorios-de-vagas" target="_blank" rel="noreferrer">Tem algum repositório para indicar?</a>
      </Indicate>
      <Repositories>
        <div>
          <button type="button">
            <i className="fas fa-code-branch" />
            <p>Organizações</p>
          </button>
        </div>
        <div className="cards">
          {repos.map((repo) => (
            <div className="card" data-testid="card" key={repo.name}>
              <h3>{repo.name}</h3>
              <img src={repo.avatar_url} alt={repo.name} width="170" height="170" />
              <Link href={`/repo/${repo.login}`}><a>Ver vagas</a></Link>
            </div>
          ))}
        </div>
      </Repositories>
    </>
  );
};

export default Home;
