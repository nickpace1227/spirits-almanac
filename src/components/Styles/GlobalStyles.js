import styled from "styled-components";
import MerriweatherBlack from "../../assets/fonts/MerriweatherBlack.ttf";
import FjallaOneRegular from "../../assets/fonts/FjallaOneRegular.ttf";
import barrels from "../../assets/images/barrels.jpg";

export const GlobalStyles = styled.div`
height: 100%;
min-height: 100vh;
background-image: url(${barrels});
background-repeat: no-repeat;
background-attachment: fixed;
background-position: center;

@font-face {
  font-family: 'MerriweatherBlack';
  src: local('MerriweatherBlack'), 
  url(${MerriweatherBlack}),
}

@font-face {
  font-family: 'FjallaOneRegular';
  src: local('FjallaOneRegular'),
  url(${FjallaOneRegular});
}  

* {
    font-family: 'MerriweatherBlack';
  }

  button {
    color: white;
    background-color: #5a2c21;
    border: none;
    border-radius: 5px;
  }
`;
