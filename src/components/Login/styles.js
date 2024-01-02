import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;

  .login-page {
    /*XXXXXX I'd change this to min-width' */
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

  /* XXXXXX I'd add some padding to this, the input fields feel cramped */
  .valid-input {
    margin: 2px;
  }

  /* XXXXXX I'd add some padding to this, the input fields feel cramped */
  .invalid-input {
    margin: 2px;
    border: solid red;
  }

  /* XXXXXX I'd add some padding to this, the buttons feel cramped */
  .login-button {
    width: auto;
    margin-top: 2px;
  }
`;
