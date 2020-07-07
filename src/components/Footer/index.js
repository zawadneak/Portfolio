import React from 'react';
import intl from 'react-intl-universal';

import { Container } from './styles';

export default function Footer() {
  return (
    <Container>
      <div>
        <text>@Lucas Cassilha Zawadneak - 2020</text>
        <text>{intl.get('NGOdescription')}</text>
      </div>
    </Container>
  );
}
