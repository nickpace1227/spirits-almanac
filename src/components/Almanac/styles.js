import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;

  &.active-modal {
    position: fixed;
    top: 172px;
    width: 100%;
  }

  .main-div {
    width: 900px;
    background-color: #efe1d3;
    display: flex;
    flex-direction: column;
    border-radius: 15px;
    padding-bottom: 25px;
    margin-bottom: 50px;
  }

  .almanac-intro {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 900px;
    margin-bottom: 20px;
  }

  .almanac-description {
    width: 650px;
    text-align: center;
  }

  .almanac-manager {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .manage-spirits {
    width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .edit-spirits {
    margin: 0px 20px 20px 20px;
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

  .almanac-title {
    text-align: center;
    margin-bottom: 0px;
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
    width: 300px;
    height: auto;
    border: solid 5px black;
    border-radius: 15px;
    margin: 10px;
    background-color: white;
    padding: 10px;
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
    padding: 10px;
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

  .section-title {
    align-text: center;
    margin: 5px;
  }

  .edit-section-title {
    align-text: center;
    margin: 20px 5px;
  }
`;
