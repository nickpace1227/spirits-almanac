import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;

    .login-page {
      width: 30vw;
      background-color:  #efe1d3;
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

    .login-input {
      margin: 2px;
    }

    .invalid-input {
      margin: 2px;
      border: solid red;
    }

    .login-button {
      width: auto;
      margin-top: 2px;
    }
`;
