import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.button`
  border: 0;
  border-radius: 4px;
  background-color: #533c8d;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  align-self: center;
  width: 220px;
  padding: 15px 0px;
  transition: 500ms;
  margin: 10px 0px;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.2);

  strong {
    color: #fff;
  }

  &:hover {
    background-color: ${darken(0.1, '#533c8d')};
  }
`;

export const a = 1;
