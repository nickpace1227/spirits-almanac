import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;

    .contact-page {
        width: 75vw;
        background-color:  #efe1d3;
        display: flex;
        flex-direction: column;
        align-items: center;
        border-radius: 15px;
    }

    .contact-header {
        text-align: center;
        margin: 20px;
    }

    .contact-form {
        display: flex;
        justify-content: center;
        text-align: center;
        width: 50vw;
        margin-bottom: 20px;
    }

    .contact-inputs {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 20px;
    }

    .valid-input {
        margin: 5px;
    }

    .invalid-input {
        margin: 5px;
        border: solid red;
    }

    .button {
        width: 70px;
        margin: 5px;
      }

    .thank-you-message {
        text-align: center;
        margin-bottom: 20px;
    }
  
`