/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState, useEffect } from 'react';

import intl from 'react-intl-universal';

import { FaGithubAlt, FaLinkedinIn } from 'react-icons/fa';
import history from '~/services/history';

import { Container, NavButton, AbsoluteBox } from './styles';

export default function Navigator() {
  const [home, setHome] = useState(true);
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    if (history.location.pathname === '/') {
      setHome(true);
    } else {
      setHome(false);
    }
  }, []);

  const handlePageChange = (id) => {
    if (history.location.pathname === '/' && id === 1) {
      history.push('/mywork');
      setHome(false);
    } else if (id === 0) {
      history.push('/');
      setHome(true);
    }
  };

  const handleGitHub = () => {
    window.location.href = 'https://github.com/lucascassilha';
  };

  const handleLinkedin = () => {
    window.location.href = 'https://www.linkedin.com/in/lucaszawadneak/';
  };

  return (
    <Container>
      <div className="navigator">
        <NavButton active={home} onClick={() => handlePageChange(0)}>
          <strong>{intl.get('who')}</strong>
        </NavButton>
        <NavButton active={!home} onClick={() => handlePageChange(1)}>
          <strong>{intl.get('myWork')}</strong>
        </NavButton>
      </div>
      <div className="reach">
        <h1 onClick={() => setHidden(!hidden)}>{intl.get('getTouch')}</h1>
        <AbsoluteBox hidden={hidden}>
          <div onClick={handleGitHub}>
            <div>
              <FaGithubAlt color="#fff" size={20} />
            </div>
            <strong>GitHub</strong>
          </div>
          <div onClick={handleLinkedin}>
            <div>
              <FaLinkedinIn color="#fff" size={20} />
            </div>
            <strong>Linkedin</strong>
          </div>
        </AbsoluteBox>
      </div>
    </Container>
  );
}
