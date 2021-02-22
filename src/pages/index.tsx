/* eslint-disable camelcase */
import React, { createContext } from 'react';
import { NextPage } from 'next';

import request from 'utils/request';

import HomeScreen from 'screens/home';

interface Repo {
  name: string,
  avatar_url: string
}

export const HomeContext = createContext<Array<Repo>>([{ name: '', avatar_url: '' }]);

const fetchInfoRepos = async () => {
  const data = await Promise.all([
    request.get('users/remoto-brasil'),
    request.get('users/react-brasil'),
    request.get('users/frontendbr'),
  ]);

  const repos = [data[0].data, data[1].data, data[2].data];

  return repos;
};

interface Props {
  repos: Array<Repo>
}

const Home: NextPage<Props> = ({ repos }) => (
  <HomeContext.Provider value={repos}>
    <HomeScreen />
  </HomeContext.Provider>
);

Home.getInitialProps = async () => {
  const repos = await fetchInfoRepos();

  return { repos };
};

export default Home;
