import styled, { keyframes } from 'styled-components';

const FadeInAnimation = keyframes`
  from { opacity: 0; transform: translateX(10%);}
  to { opacity: 1;transform: translateX(0%) }
`;

export const Container = styled.div`
  background-color: #112233;
  overflow: hidden;
`;

export const ScreenHolder = styled.div`
  padding: 120px;
  height: 100%;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;

  animation: ${FadeInAnimation} 1000ms;

  @media screen and (max-width: 810px) {
    padding: 30px;
  }
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
  a {
    color: #fff;
  }
`;

export const BoxHolder = styled.div`
  margin: 200px 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    p {
      margin: 10px 0px;
      color: #fff;
      font-size: 18px;
      text-align: justify;
    }
    img {
      border-radius: 4px;
      max-height: 400px;
      max-width: 400px;
      margin-left: 20px;
    }
  }

  #inverted {
    flex-direction: row;
  }

  @media screen and (max-width: 1058px) {
    flex-direction: column;
    margin-right: 0px;
  }

  #print {
    height: auto;
  }

  #covid {
    height: 500px;
  }

  @media screen and (max-width: 626px) {
    #maruska {
      height: 300px;
      width: 350px;
    }
    #covid {
      height: 300px;
    }
    #face {
      height: 200px;
    }
    #print {
      height: 300px;
      width: 300px;
    }
  }

  @media screen and (max-width: 366px) {
    #maruska {
      height: 200px;
      width: 250px;
    }
    #covid {
      height: 200px;
    }
    #face {
      height: 150px;
    }
    #title {
      height: 40px;
    }
  }
`;
