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
    }

    .general {
      text-align: center;
    }

    .search {
      text-align: center;
    }

    .advanced-search {
      margin-left: 10px;
    }
`;
