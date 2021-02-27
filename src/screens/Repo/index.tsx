import React, { useContext } from 'react';
import { useRouter } from 'next/router';

import { Info, Jobs } from 'styles/repo';

import { ReposContext } from 'contexts/ReposProvider';

const Repo: React.FC = () => {
  const router = useRouter();
  const { repos, jobs } = useContext(ReposContext);

  const { query } = router;

  const nameRepo = repos.filter((repo) => repo.login === query.slug);

  return (
    <>
      <Info>
        <div>
          <button type="button">
            <i className="fas fa-code-branch" />
            <p>Vagas da organização</p>
          </button>
        </div>
        <h2>
          {nameRepo?.[0]?.name}
        </h2>
      </Info>
      <Jobs>
        {jobs.map((job) => (
          <div className="job" key={job.title}>
            <p className="title">{job.title}</p>
            <div className="labels">
              {job.labels.map((j) => <p>{j.name}</p>)}
            </div>
          </div>
        ))}
      </Jobs>
    </>
  );
};

export default Repo;
