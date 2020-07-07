import styled from 'styled-components';

export const Container = styled.div`
  height: 60px;
  width: 100%;
  background-color: #562739;
  bottom: 0;
  display: flex;
  justify-content: center;

  > div {
    height: 100%;
    width: 100%;
    max-width: 1000px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    text {
      max-width: 600px;
      font-size: 12px;
      color: #fff;
    }
  }

  @media screen and (max-width: 1020px) {
    height: 100px;
    > div {
      flex-direction: column;
      justify-content: center;
      text-align: center;
    }
  }
`;

export const a = 1;
