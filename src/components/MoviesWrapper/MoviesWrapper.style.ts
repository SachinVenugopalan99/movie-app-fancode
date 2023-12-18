import styled from "styled-components";

export const Wrapper = styled.main`
  margin-top: 135px;
  height: 100%;
  .movieContainer{
    margin-top: 10px;
    padding: 10px;
  }
  .heading {
    font-size: 1.5em;
    font-weight: 400;
    padding: 30px 0;
    display: flex;
  }

  .movies {
    display: flex;
    flex-wrap: wrap;
    gap: 30px 20px;
    min-height: 84vh;
  }

  .no_movies {
    text-align: center;
    margin-top: 100px;
    font-weight: 400;
    font-size: 1.2em;
    height: 84vh;
    display: flex;
    align-items:center;
    justify-content: center;
  }
`;