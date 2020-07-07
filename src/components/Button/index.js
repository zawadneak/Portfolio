import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './styles';

export default function Button({ title, onClick }) {
  return (
    <Wrapper onClick={onClick}>
      <strong>{title.toUpperCase()}</strong>
    </Wrapper>
  );
}

Button.propTypes = {
  title: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  title: '',
};
