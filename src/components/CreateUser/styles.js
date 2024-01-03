import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;

  .create-user-page {
    min-width: 300px;
    background-color: #efe1d3;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 15px;
  }

  .create-user-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 200px;
    margin-bottom: 15px;
  }

  .valid-user-input {
    border-radius: 5px;
    margin: 2px;
    padding: 5px;
  }

  .invalid-user-input {
    border: solid red;
    border-radius: 5px;
    margin: 2px;
    padding: 5px;
  }

  .create-user-button {
    width: auto;
    margin-top: 2px;
    padding: 5px;
  }
`;
