import styled from "styled-components";

export const GlobalStyles = styled.div`
  * {
    font-family: 'MerriweatherBlack';
  }

  main {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .page {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  button {
    color: white;
    background-color: #5a2c21;
    border: none;
    border-radius: 5px;
  }
`;
