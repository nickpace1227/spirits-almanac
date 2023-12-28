import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;

    .main-div {
      width: 75vw;
      background-color:  #efe1d3;
      display: flex;
      flex-direction: column;
      border-radius: 15px;
      padding-bottom: 25px;
      margin-bottom: 50px;
    }

    .almanac-intro {
      text-align: center;
    }

    .search-section {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .search-bar {
      text-align: center;
    }

    .advanced-search {
      margin-left: 10px;
      text-decoration: none;
    }

    .almanac-manager {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .manage-spirits {
      width: auto;
      margin-bottom: 15px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .inputs {
     display: flex;
     flex-wrap: wrap;
     justify-content: center;
     width: 40vw;
    }

    .valid-search-input {
      margin: 2px;
    }

    .invalid-search-input {
      border: solid red;
      margin: 2px;
    }

    .valid-input {
      margin: 2px;
    }

    .invalid-input {
      border: solid red;
      margin: 2px;
    }

    .no-results {
      text-align: center;
      margin: 20px;
      font-size: 25px;
    }

    .button {
      width: 70px;
      margin: 5px;
    }

    .almanac-title {
      text-align: center;
    }

    .user-almanac {
      display: flex;
      flex-flow: row wrap;
      justify-content: center;
      width: auto;
    }

    .almanac-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 20vw;
      height: auto;
      border: solid 5px black;
      border-radius: 15px;
      margin: 10px;
      background-color: white;
    }

    .almanac-item-layout {
      margin: 0px 5px;
    }

    .card-name {
      text-align: center;
    }

    .card-button {
      margin: 5px 2px;
    }
`;
