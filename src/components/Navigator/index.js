/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState, useEffect } from 'react';
import intl from 'react-intl-universal';
import ReactGA from 'react-ga';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  FaGithubAlt,
  FaLinkedinIn,
  FaStackOverflow,
  FaInbox,
} from 'react-icons/fa';
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
    window.location.href = 'https://github.com/lucaszawadneak';
    ReactGA.event({
      category: 'Contact',
      action: 'Github',
    });
  };

  const handleLinkedin = () => {
    window.location.href = 'https://www.linkedin.com/in/lucaszawadneak/';
    ReactGA.event({
      category: 'Contact',
      action: 'Linkedin',
    });
  };

  const handleEmail = () => {
    toast.info(intl.get('email_toast'), {
      position: 'top-center',
      autoClose: 10000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
    });
    ReactGA.event({
      category: 'Contact',
      action: 'Copyied email',
    });
  };

  const handleStackOverflow = () => {
    window.location.href =
      'https://stackoverflow.com/users/12705405/lucas-zawadneak';
    ReactGA.event({
      category: 'Contact',
      action: 'Linkedin',
    });
  };

  const handleContactMe = () => {
    setHidden(!hidden);
    ReactGA.event({
      category: 'Contact',
      action: 'Opened Contact me menu',
    });
  };

  return (
    <Container>
      <div className="navigator">
        <ToastContainer />
        <NavButton active={home} onClick={() => handlePageChange(0)}>
          <strong>{intl.get('who')}</strong>
        </NavButton>
        <NavButton active={!home} onClick={() => handlePageChange(1)}>
          <strong>{intl.get('myWork')}</strong>
        </NavButton>
      </div>
      <div className="reach">
        <h1 onClick={handleContactMe}>{intl.get('getTouch')}</h1>
        <AbsoluteBox hidden={hidden}>
          <div onClick={handleEmail}>
            <div>
              <FaInbox color="#fff" size={20} />
            </div>
            <strong>Email</strong>
          </div>
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
          <div onClick={handleStackOverflow}>
            <div>
              <FaStackOverflow color="#fff" size={20} />
            </div>
            <strong>StackOverflow</strong>
          </div>
        </AbsoluteBox>
      </div>
    </Container>
  );
}
