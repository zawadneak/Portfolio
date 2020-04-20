import React from 'react';

import { Container, ScreenHolder, Intro } from './styles';

export default function Work() {
  return (
    <Container>
      <ScreenHolder>
        <Intro>
          <h1>My Work</h1>
          <h3>
            Here you can see some of the projects that I have already developed,
            or that I am still working in!
          </h3>
          <a
            href="https://github.com/lucascassilha"
            target="_blank"
            rel="noopener noreferrer"
          >
            If you wish to see all the projects that I developed, please check
            out my GitHub page
          </a>
        </Intro>
      </ScreenHolder>
    </Container>
  );
}
