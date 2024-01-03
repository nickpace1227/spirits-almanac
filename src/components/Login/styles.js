import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;

  .login-page {
    width: 30vw;
    background-color: #efe1d3;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 15px;
  }

  .login-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 200px;
  }

  .valid-input {
    border-radius: 5px;
    margin: 2px;
    padding: 5px;
  }

  .invalid-input {
    border: solid red;
    border-radius: 5px;
    margin: 2px;
    padding: 5px;
  }

  .login-button {
    width: auto;
    margin-top: 2px;
    padding: 5px;
  }

  .create-account {
    margin: 10px;
  }
`;
