import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  background-color: #112233;
  display: flex;
  align-items: center;
`;

export const ScreenHolder = styled.div`
  padding: 120px;
  height: 100%;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

export const Intro = styled.div`
  margin: 180px 0px;
  h1 {
    font-size: 72px;
    font-weight: 900;
    font-style: italic;
    color: #fff;
  }
  h3 {
    color: #fff;
  }
`;

export const BoxHolder = styled.div`
  margin: 200px 0px;
  align-self: stretch;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  h1 {
    color: #fff;
    font-size: 21px;
  }
  p {
    color: #fff;
    font-size: 14px;
    letter-spacing: 1px;
    line-height: 20px;
  }

  span {
    color: #bc6b8a;
  }

  img {
    height: 300px;
    margin: 0px 10px;
  }
`;
