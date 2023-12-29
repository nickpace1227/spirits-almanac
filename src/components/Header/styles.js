import styled from "styled-components";

export const Wrapper = styled.div`
align-items: center;
margin-bottom: 50px;

.header-content {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.header-logo {
    font-family: 'FjallaOneRegular';
    font-size: 50px;
    text-decoration: none;
    color: white;
    margin: 25px 0px 5px 0px;
    text-shadow: 2px 2px 3px black;
}

.nav-bar {
    margin: 5px; 
}

.link-item {
    margin: 10px;
    color: white;
    text-decoration: none;
    text-shadow: 2px 2px 3px black;
}
`;