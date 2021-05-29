/* eslint-disable camelcase */
import React from 'react';
import { NextPage, GetStaticProps } from 'next';

import request from 'utils/request';

import HomeScreen from 'screens/Home';
import Layout from 'components/Layout';

interface Repo {
  name: string,
  avatar_url: string,
  login: string
}
interface Repos {
  repositories: Repo[]
}

const Home: NextPage<Repos> = ({ repositories }) => (
  <Layout>
    <HomeScreen repositories={repositories} />
  </Layout>
);

export const getStaticProps: GetStaticProps = async () => {
  const data = await Promise.all([
    request.get('users/remoto-brasil'),
    request.get('users/react-brasil'),
    request.get('users/frontendbr'),
    request.get('users/backend-br'),
    request.get('users/vuejs-br'),
    request.get('users/dotnetdevbr'),
  ]);

  const repositories = data.map((repository) => repository.data);

  return {
    props: {
      repositories,
    },
    revalidate: 3600 * 24,
  };
};

export default Home;
