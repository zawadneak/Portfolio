/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState, useEffect } from 'react';

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
  }, [history]);

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
    window.location.href = 'https://www.linkedin.com/in/lcassilha/';
  };

  return (
    <Container>
      <div className="navigator">
        <NavButton active={home} onClick={() => handlePageChange(0)}>
          <text>Who am I?</text>
        </NavButton>
        <NavButton active={!home} onClick={() => handlePageChange(1)}>
          <text>My work</text>
        </NavButton>
      </div>
      <div className="reach">
        <h1 onClick={() => setHidden(!hidden)}>Get in touch</h1>
        <AbsoluteBox hidden={hidden}>
          <div onClick={handleGitHub}>
            <div>
              <FaGithubAlt color="#fff" size={25} />
            </div>
            <strong>GitHub</strong>
          </div>
          <div onClick={handleLinkedin}>
            <div>
              <FaLinkedinIn color="#fff" size={25} />
            </div>
            <strong>Linkedin</strong>
          </div>
        </AbsoluteBox>
      </div>
    </Container>
  );
}
