import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;

    .create-user-page {
        width: 30vw;
        background-color:  #efe1d3;
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
        margin: 2px;
    }

    .invalid-user-input {
        margin: 2px;
        border: solid red;
    }

    .create-user-button {
        width: auto;
        margin-top: 2px;
    }
`;