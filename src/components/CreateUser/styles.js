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

    .create-user-input {
        margin: 2px;
    }

    .create-user-button {
        width: auto;
        margin-top: 2px;
    }
`;