import styled from "styled-components";

export const Wrapper = styled.main`
    background: var(--black);
    color: var(--white);
    height: 100%;

  .heading {
    font-size: 1.5em;
    font-weight: 400;
    padding: 15px 0;
  }

  .movies {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(225px, auto));
    gap: 30px 20px;
  }

  .no_movies {
    text-align: center;
    margin-top: 100px;
    font-weight: 400;
    font-size: 1.2em;
    height: 100%;
  }
`;