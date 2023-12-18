import styled from "styled-components";

export const Wrapper = styled.main`
  position: relative;
  transition: transform .45s,-webkit-transform .45s;
  object-fit: contain;
  border-radius: 10px;
  overflow: hidden;
  height: 250px;
  width: 167px;
    &:hover {
    cursor: pointer;
    .details{
      display: block;
    }
  }
  a {
    width: 100%;
  }

  .image {
    height: 100%;
    min-width: 100%;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .details{
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--darkGray);
    padding:5px;
    overflow: hidden;

    .overview {
      font-size: 0.9em;
      font-weight: 500
    }
    .description {
    font-size: 0.7em;
    margin-top: 10px;
        overflow: hidden;
    text-overflow: ellipsis;
    white-space: wrap;
    height: 80%;
    }
  }

  .cover {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;

    .title {
      position: absolute;
      width: 100%;
      bottom: 0;
      background-color: #fff;
      font-size: 0.9em;
      font-weight: 400;
      color: #000;
      text-align: center;
      padding: 8px 0;
    }
  }

  .rating {
    font-size: 0.9em;
    position: absolute;
    top: 5px;
    left: 5px;
    background: rgba(0, 0, 0, 0.8);
    display: grid;
    place-content: center;
    padding: 7px;
    border-radius: 50%;
  }
`;