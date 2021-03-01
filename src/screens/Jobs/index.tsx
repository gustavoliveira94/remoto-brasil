import React, { useContext } from 'react';
import moment from 'moment';
import { useRouter } from 'next/router';
import Link from 'next/link';

import { Info, Jobs } from 'styles/jobs';

import { ReposContext } from 'contexts/ReposProvider';

moment.locale('pt-br');

const Repo: React.FC = () => {
  const router = useRouter();
  const { repos, jobs } = useContext(ReposContext);

  const { query } = router;

  const nameRepo = repos.filter((repo) => repo.login === query.slug);
  const remoteOk = jobs.map((job) => job.labels.filter((j) => j.name.includes('Remoto')));
  const filterLabel = jobs.filter((job, index) => job.state === 'open' && remoteOk[index].length === 1);

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
        {filterLabel.map((job) => (
          <Link href={`/job/${query.slug}/${job.number}`} key={job.title}>
            <a>
              <div className="job">
                <p className="title">
                  {job.title}
                  {' '}
                  -
                  {' '}
                  <span>{`(${moment(job.created_at).fromNow()})`}</span>
                </p>
                <div className="labels">
                  {job.labels.map((j) => <p>{j.name}</p>)}
                </div>
              </div>
            </a>
          </Link>
        ))}
      </Jobs>
    </>
  );
};

export default Repo;
