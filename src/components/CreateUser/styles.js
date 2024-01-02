import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;

  /* XXXXXX i'd recommend setting this to min-width instead. having variable size contains is back practice */
  .create-user-page {
    width: 30vw;
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

  /* XXXXXX I'd add some padding to this, the input fields feel cramped */
  .valid-user-input {
    margin: 2px;
  }

  /* XXXXXX I'd add some padding to this, the input fields feel cramped */
  .invalid-user-input {
    margin: 2px;
    border: solid red;
  }

  /* XXXXXX I'd add some padding to this, the button feels cramped */
  .create-user-button {
    width: auto;
    margin-top: 2px;
  }
`;
