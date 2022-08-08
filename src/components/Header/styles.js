import styled from "styled-components";

export const Container = styled.header`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
`;

export const ContentWrapper = styled.div`
  max-width: 112rem;
  height: 12.3rem;
  margin: 0 auto;
  display: flex;
  align-items: center;

  > .logo {
    width: 19.7rem;
    margin-right: 3.2rem;
  }

  > ul {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  > ul li {
    button {
      width: 21.6rem;
      height: 5.6rem;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.8rem;
      color: ${({ theme }) => theme.COLORS.WHITE};
      background-color: ${({ theme }) => theme.COLORS.RED800};
      border: none;
      border-radius: 0.5rem;

      img {
        max-width: 2.7rem;
        max-height: 2.2rem;
      }
    }

    a {
      img {
        max-width: 2.5rem;
        max-height: 2.4rem;
      }
    }
  }
`;
