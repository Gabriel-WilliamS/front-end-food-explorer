import styled from "styled-components";

export const Container = styled.section`
  min-width: 25rem;
  min-height: 25rem;
  border: 1px dashed
    ${({ theme, isDragActive, error }) =>
      isDragActive
        ? theme.COLORS.GREEN
        : error
        ? theme.COLORS.RED700
        : theme.COLORS.BACKGROUND_600};
  position: relative;
  padding: 0 1rem;
  overflow: hidden;

  div {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    p {
      font-size: 2rem;
    }
  }
  aside {
    img {
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
      width: 100%;
    }
  }

  svg {
    width: 2.5rem;
    height: 2.5rem;
    background-color: ${({ theme }) => theme.COLORS.GRAY700};
    padding: 0.3rem;
    border-radius: 50%;
    fill: ${({ theme }) => theme.COLORS.RED800};
    position: absolute;
    top: 15px;
    right: 15px;
    z-index: 5;
    -webkit-box-shadow: 11px 10px 12px -10px rgba(0, 0, 0, 0.31);
    -moz-box-shadow: 11px 10px 12px -10px rgba(0, 0, 0, 0.31);
    box-shadow: 11px 10px 12px -10px rgba(0, 0, 0, 0.31);
    cursor: pointer;
  }

  svg:hover {
    transform: scale(1.1);
  }
`;
