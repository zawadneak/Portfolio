import React, { useState } from 'react';

import history from '~/services/history';

import { Container, NavButton } from './styles';

export default function Navigator() {
  const [home, setHome] = useState(true);

  const handlePageChange = () => {
    if (history.location.pathname === '/') {
      history.push('/mywork');
      setHome(false);
    } else {
      history.push('/');
      setHome(true);
    }
  };

  return (
    <Container>
      <div className="navigator">
        <NavButton active={home} onClick={handlePageChange}>
          <text>Who am I?</text>
        </NavButton>
        <NavButton active={!home} onClick={handlePageChange}>
          <text>My work</text>
        </NavButton>
      </div>
      <div className="reach">
        <h1>Get in touch</h1>
      </div>
    </Container>
  );
}
