import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const IncredientsWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  border-radius: 0.5rem;
  padding: 1.2rem 1.4rem;
  border: 1px solid
    ${({ theme, error, borderError }) =>
      error && borderError ? theme.COLORS.RED700 : theme.COLORS.WHITE};

  > div {
    width: auto;
    min-width: 6rem;
    height: fit-content;
    display: flex;
    flex: 1;

    > input {
      width: 100%;
      display: block;
      height: 2.8rem;
      padding: 0 1.4rem;
      border-radius: 0.5rem;
      background-color: transparent;
      text-transform: capitalize;
      border: none;
      outline: none;
    }

    datalist {
      background-color: red;
    }
  }

  > span {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
    height: 2.8rem;
    display: flex;
    gap: 0.5rem;
    align-items: center;
    padding: 0.8rem;
    border-radius: 0.5rem;
    text-transform: capitalize;

    svg {
      cursor: pointer;
      transition: fill 0.3s;
      &:hover {
        fill: ${({ theme }) => theme.COLORS.RED700};
      }
    }
  }
`;
