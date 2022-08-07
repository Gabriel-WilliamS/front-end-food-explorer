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
  justify-content: space-between;

  > .logo {
    width: 19.7rem;
  }

  > button {
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
  }
`;
