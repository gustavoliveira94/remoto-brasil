/* eslint-disable camelcase */
import React, {
  createContext, useEffect, useState,
} from 'react';
import { useRouter } from 'next/router';

import request from 'utils/request';

interface Repo {
  name: string,
  avatar_url: string,
  login: string
}

interface Label {
  name: string
}

interface Jobs {
  state: string,
  title: string,
  labels: Array<Label>
}

interface Context {
  repos: Array<Repo>,
  jobs: Array<Jobs>
}

export const ReposContext = createContext<Context>({ repos: [{ name: '', avatar_url: '', login: '' }], jobs: [] });

const ReposProvider: React.FC = ({ children }) => {
  const router = useRouter();

  const [repos, setRepos] = useState<Array<Repo>>([]);
  const [jobs, setJobs] = useState<[]>([]);
  const [route, setRoute] = useState<string | string[] | undefined>(router.query.slug);

  const fetchRepos = async () => {
    const data = await Promise.all([
      request.get('users/remoto-brasil'),
      request.get('users/react-brasil'),
      request.get('users/frontendbr'),
      request.get('users/backend-br'),
    ]);

    const repositories = [data[0]?.data, data[1]?.data, data[2]?.data, data[3]?.data];

    return setRepos(repositories);
  };

  const fetchJobs = async () => {
    const { query } = router;

    const { data } = await request.get(`repos/${query.slug}/vagas/issues`);

    return setJobs(data);
  };

  useEffect(() => {
    if (!repos.length) {
      fetchRepos();
    }
  }, [repos]);

  useEffect(() => {
    const { query, route: routeName } = router;

    if ((route !== query.slug) && routeName === '/repo/[slug]') {
      setRoute(query.slug);
      fetchJobs();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router]);

  return (
    <ReposContext.Provider value={{ repos, jobs }}>
      {children}
    </ReposContext.Provider>
  );
};

export default ReposProvider;
