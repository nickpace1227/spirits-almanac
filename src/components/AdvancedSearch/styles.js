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

    .advanced-search-intro {
      text-align: center;
    }

    .advanced-search {
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

     .valid-input {
      margin: 2px;
      border-radius: 5px;
    }

    .invalid-input {
      border: solid red;
      border-radius: 5px;
      margin: 2px;
    }

    .button {
      width: 70px;
      margin: 5px 2px;
    }

    .search-results {
      text-align: center;
    }

    .user-search {
      display: flex;
      flex-flow: row wrap;
      justify-content: center;
      width: auto;
    }

    .search-item {
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

    .search-item-layout {
      margin: 0px 5px;
    }

    .card-name {
      text-align: center;
    }

    .favorite-selector {
     margin-top: 7px;
    }

    .favorite-button {
      background-color: rgb(0, 0, 0, 0);
      color: gold;
      font-size: 50px;
    }

    .editing-modal {
      display: flex;
      justify-content: center;
      align-items: center;
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      height: 100vh;
      width: 100vh;
      background-color: rgb(0, 0, 0, 0.7);
      padding: 0px;
      overflow: hidden;
      z-index: 100;
    }

    .spirit-modal {
      display: flex;
      flex-direction: column;
      align-items: center;
      background-color: #efe1d3;
      text-align: center;
      width: 40vw;
      height: 17vh;
      border-radius: 15px;
    }
`;
