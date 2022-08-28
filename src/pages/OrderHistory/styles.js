import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  height: 100%;
`;

export const ContainerWrapper = styled.div`
  max-width: 112rem;
  margin: 0 auto;
  padding-inline: 1.6rem;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.8rem;
    background: none;
    border: none;
    margin-block: 3.4rem;
  }

  h1 {
    font-weight: 500;
    font-size: 3.2rem;
    color: ${({ theme }) => theme.COLORS.GRAY700};
    margin-bottom: 3.4rem;
  }

  table {
    width: 100%;
    border-spacing: 0 1rem;

    th {
      font-size: 1.4rem;
      font-family: ${({ theme }) => theme.FONTS.PRIMARY};
      font-weight: 700;
      color: ${({ theme }) => theme.COLORS.GRAY700};
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
      text-align: left;
      padding: 1.6rem;

      &:first-child {
        border-radius: 0.8rem 0 0 0.8rem;
      }

      &:last-child {
        border-radius: 0 0.8rem 0.8rem 0;
      }
    }
  }
`;
