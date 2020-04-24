import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  width: 100%;
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

  h1 {
    font-size: 72px;
    font-weight: 900;
    font-style: italic;
    color: #fff;
    margin: 100px 0px;
  }
  form {
    display: flex;
    flex-direction: column;

    textarea,
    input {
      font-size: 16px;
      border: 0;
      border-bottom: 1px solid #ddd;
      background-color: #112233;
      margin-bottom: 10px;
      margin-bottom: 40px;
      transition: 500ms;
      color: #f2f2f2;
      padding: 5px;

      &:focus {
        border-bottom: 1px solid #533c8d;
      }
    }

    input {
      height: 35px;
    }

    textarea {
      height: 70px;
      resize: none;
      padding: 5px;

      ::-webkit-scrollbar {
        width: 3px;
      }
      ::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background-color: #fff;
      }
    }
  }
  @media screen and (max-width: 810px) {
    padding: 30px;
  }
`;
