import React from 'react';

import { Container, ScreenHolder } from './styles';

import Button from '~/components/Button';

export default function Direct() {
  return (
    <Container>
      <ScreenHolder>
        <h1>Direct contact!</h1>
        <form
          name="Contact"
          netlify
          data-netlify="true"
          onSubmit={() => alert("Thank you for the message! I'll be in touch")}
        >
          <input
            placeholder="Your email - so I can write you back!*"
            name="email"
            type="email"
          />
          <textarea placeholder="Talk to me!" name="description" type="text" />
          <Button title="Send" type="submit" />
        </form>
      </ScreenHolder>
    </Container>
  );
}
