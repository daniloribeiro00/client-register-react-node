import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
`;

export const Header = styled.header`
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
  padding: 30px 0;
  border-bottom: 1px solid #ddd;

  h1 {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const Content = styled.div`
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
  padding: 30px;

  h2 {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  form {
    width: 650px;
    margin: 0 auto;
    padding: 30px;
    border-radius: 0.8rem;
    box-shadow: 5px 5px 26px 5px rgba(0,0,0,0.15);

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      margin-top: 30px;

      label {
        font-size: 0.8rem;
      }

      input {
        margin-top: 10px;
        border: 1px solid #ddd;
        border-radius: 0.8rem;
        padding: 5px 10px;
        width: 500px;
      }
    }

    button {
      margin-top: 25px;
      height: 30px;
      width: 100px;
      border: 0;
      border-radius: 0.8rem;
      background-color: #21ab47;
      color: #fff;
      font-weight: 600;
    }
  }
`;
