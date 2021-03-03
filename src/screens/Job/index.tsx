/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useContext } from 'react';
import ReactMarkdown from 'react-markdown';

import { ReposContext } from 'contexts/ReposProvider';

import { Info, Body } from 'styles/job';

const Job: React.FC = () => {
  const { job } = useContext(ReposContext);

  return (
    <>
      <Info>
        <div>
          <button type="button">
            <i className="fas fa-code-branch" />
            <p>Informações da vaga</p>
          </button>
        </div>
        <h2>{job.title}</h2>
      </Info>
      <Body>
        {/* eslint-disable-next-line no-useless-escape */}
        <ReactMarkdown source={job.body?.replace(/\<!\-\-((.|[\n|\r|\r\n])*?)\-\-\>/g, '')} />
      </Body>
    </>
  );
};

export default Job;
