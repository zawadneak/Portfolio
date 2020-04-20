import styled from 'styled-components';

export const Container = styled.nav`
  width: 80%;
  align-self: center;
  height: 80px;
  background-color: #6c2b44;
  position: absolute;
  top: 30px;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
  border-radius: 4px;

  .navigator {
    height: 100%;
    display: flex;
    flex-direction: row;
  }

  .reach {
    > h1 {
      color: #fff;
      font-style: italic;
    }
    cursor: pointer;
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

  > text {
    font-size: 18px;
    font-weight: 600;
    color: #fff;
    opacity: ${(props) => (props.active ? 1 : 0.5)};
    transition: 500ms;
    margin-top: 3px;
  }

  &:hover {
    > text {
      opacity: 1;
    }
  }
`;
