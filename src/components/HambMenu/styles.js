import styled from "styled-components";

export const Container = styled.div`
  width: fit-content;
  height: 4rem;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
  overflow: hidden;
  cursor: pointer;
  z-index: 15;

  div {
    width: 4rem;
    height: 0.6rem;
    background-color: #fff;
    transition: all 0.5s;
    border-radius: 0.3rem;
    transform-origin: 1px;

    &:nth-child(1) {
      transform: ${({ menuOpen }) =>
        menuOpen
          ? "rotate(45deg) translateX(.7rem) translateY(-.7rem)"
          : "rotate(0deg) "};
    }

    &:nth-child(2) {
      transform: ${({ menuOpen }) =>
        menuOpen ? "translateX(-8.5rem)" : "translateX(0)"};
      opacity: ${({ menuOpen }) => (menuOpen ? 0 : 1)};
    }

    &:nth-child(3) {
      transform: ${({ menuOpen }) =>
        menuOpen
          ? "rotate(-45deg) translateX(.7rem) translateY(.7rem)  "
          : "rotate(0deg) "};
    }
  }
`;
