import React, { useState } from 'react';

import { Container, ScreenHolder } from './styles';

import Button from '~/components/Button';

export default function Direct() {
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
      )
      .join('&');
  };

  const handleSubmit = () => {
    if (description !== '' && email !== '') {
      fetch('/', {
        method: 'POST',
        body: encode({ 'form-name': 'contact', email, description }),
      })
        .then(() => alert('Success!'))
        .catch((error) => alert(error));
    }
  };

  return (
    <Container>
      <ScreenHolder>
        <h1>Direct contact!</h1>
        <form
          name="contact"
          netlify
          data-netlify="true"
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <input
            placeholder="Your email - so I can write you back!*"
            name="email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            placeholder="Talk to me!"
            name="description"
            type="text"
            onChange={(e) => setDescription(e.target.value)}
          />
          <Button title="Send" type="submit" />
        </form>
      </ScreenHolder>
    </Container>
  );
}
