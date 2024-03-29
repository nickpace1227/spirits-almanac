import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;

  .main-div {
    width: 900px;
    background-color: #efe1d3;
    display: flex;
    flex-direction: column;
    border-radius: 15px;
    padding-bottom: 25px;
    margin-bottom: 50px;
  }

  .advanced-search-intro {
    text-align: center;
    margin-bottom: 0px;
  }

  .advanced-search {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .inputs {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 250px;
  }

  .valid-input {
    margin: 2px;
    border-radius: 5px;
    padding: 5px;
  }

  .invalid-input {
    border: solid red;
    border-radius: 5px;
    margin: 2px;
    padding: 5px;
  }

  .button {
    width: 80px;
    margin: 5px 2px;
    height: 25px;
    padding: 5px;
  }

  .edit-spirits {
    margin: 0px 20px 20px 20px;
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
    width: 300px;
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
    text-shadow: 2px 2px 3px black;
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
    width: 100vw;
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
    width: auto;
    height: auto;
    border-radius: 15px;
  }

  .edit-section-title {
    align-text: center;
    margin: 20px 5px;
  }
`;
