import styled from 'styled-components';
import { darken, lighten } from 'polished';

export const Container = styled.nav`
  width: 80%;
  max-width: 960px;
  align-self: center;
  height: 80px;
  background-color: #6c2b44;
  position: fixed;
  top: 30px;
  left: 0;
  right: 0;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  z-index: 1;

  .navigator {
    height: 100%;
    display: flex;
    flex-direction: row;
  }

  .reach {
    position: relative;
    > h1 {
      color: #fff;
      font-style: italic;
      transition: 300ms;

      &:hover {
        text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.2);
      }
    }
    cursor: pointer;
  }
  @media screen and (max-width: 476px) {
    .reach > h1 {
      font-size: 12px;
    }
  }
`;

export const NavButton = styled.div`
  border-bottom: ${(props) =>
    props.active ? '3px solid #376f88' : '3px solid #6c2b44'};
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 20px;
  transition: 500ms;
  cursor: pointer;

  > strong {
    font-size: 18px;
    font-weight: 600;
    color: #fff;
    opacity: ${(props) => (props.active ? 1 : 0.5)};
    transition: 500ms;
    margin-top: 3px;
  }

  @media screen and (max-width: 476px) {
    > text {
      font-size: 14px;
    }
  }

  &:hover {
    > text {
      opacity: 1;
    }
  }
`;

export const AbsoluteBox = styled.div`
  height: 110px;
  width: 220px;
  align-items: center
  background-color: green;
  position: absolute;
  margin-top: 35px;
  right: -20px;
  border-radius: 4px;
  background-color: #6c2b44;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  transition: all 1s ease;
  transform: ${(props) =>
    props.hidden ? 'translateX(200%)' : 'translateX(0)'};
  opacity: ${(props) => (props.hidden ? 0 : 1)};


  div {
    height: 50%;
    padding: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    transition: 500ms;
    & + div {
      border-top: 1px solid ${darken(0.1, '#6c2b44')};
    }

    &:hover {
      background-color: ${lighten(0.1, '#6c2b44')};
      border-radius: 4px;
    }
    > div {
      height: 40px;
      width: 40px;
      border-radius: 25px;
      background-color: ${darken(0.1, '#6c2b44')};
      margin-right: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    strong {
      color: #fff;
    }
  }
`;
