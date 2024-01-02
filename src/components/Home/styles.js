import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;

  .home-page {
    // XXXXXX I would change this to be a min-width and pixels instead of a width and vw. that way it doesnt just perpetually grow
    width: 75vw;
    background-color: #efe1d3;
    display: flex;
    flex-direction: column;
    border-radius: 15px;
  }

  .title {
    text-align: center;
  }

  .section-description {
    text-align: left;
    margin: 0px 50px;
  }

  h2 {
    text-align: center;
  }

  .suggestions-list {
    margin: 10px 50px 25px 50px;
  }

  .list-item {
    margin: 5px 0px;
  }
`;
