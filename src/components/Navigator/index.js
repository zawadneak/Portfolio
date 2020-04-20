import React, { useState, useEffect } from 'react';

import history from '~/services/history';

import { Container, NavButton } from './styles';

export default function Navigator() {
  const [home, setHome] = useState(true);

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
        <h1>Get in touch</h1>
      </div>
    </Container>
  );
}
