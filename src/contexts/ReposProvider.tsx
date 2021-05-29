/* eslint-disable camelcase */
import React, {
  createContext, useEffect, useState,
} from 'react';
import { useRouter } from 'next/router';

import request from 'utils/request';

interface Label {
  name: string,
  id: string
}

interface Jobs {
  id: string,
  state: string,
  title: string,
  created_at: Date,
  number: Number,
  labels: Array<Label>
}

interface Job {
  title: string,
  body: string
}

interface Context {
  jobs: Array<Jobs>,
  job: Job,
}

export const ReposContext = createContext<Context>({
  jobs: [],
  job: { title: '', body: '' },
});

const ReposProvider: React.FC = ({ children }) => {
  const router = useRouter();
  const { query } = router;

  const [jobs, setJobs] = useState<[]>([]);
  const [job, setJob] = useState<Job>({ title: '', body: '' });
  const [route, setRoute] = useState<string | string[] | undefined>(query.slug);
  const [id, setId] = useState<string | string[] | undefined>(query.id);

  const fetchJob = async () => {
    const { data } = await request.get(`repos/${query.slug}/vagas/issues/${query.id}`);

    setJob(data);
  };

  const fetchJobs = async () => {
    const { data } = await request.get(`repos/${query.slug}/vagas/issues?per_page=100&state=open`);

    return setJobs(data);
  };

  useEffect(() => {
    const { route: routeName } = router;

    if ((id !== query.id) && routeName === '/job/[slug]/[id]') {
      setId(query.id);
      fetchJob();
    }

    if ((route !== query.slug) && routeName === '/jobs/[slug]') {
      setRoute(query.slug);
      fetchJobs();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router]);

  return (
    <ReposContext.Provider value={{ jobs, job }}>
      {children}
    </ReposContext.Provider>
  );
};

export default ReposProvider;
