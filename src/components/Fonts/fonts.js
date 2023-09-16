import {createGlobalStyle} from "styled-components";
import FjallaOneRegular from "./FjallaOneRegular.ttf";
import MerriweatherBlack from "./MerriweatherBlack.ttf";

export default createGlobalStyle`
@font-face {
    font-family: 'MerriweatherBlack';
    font-family: 'FjallaOneRegular';
    src: local('MerriweatherBlack'), local('FjallaOneRegular'),
    url(${MerriweatherBlack}),
    url(${FjallaOneRegular});
    font-weight: 300;
    font-style: normal;
}
`;