import styled from "styled-components";

export const Container = styled.div`
  width: 40.3rem;
  height: 10.4rem;
  display: flex;
  align-items: center;
  gap: 1.3rem;
  > img {
    width: 7.2rem;
    height: 7.2rem;
  }

  .content-order {
    h2 {
      font-size: 2rem;
      font-weight: 500;
      > span {
        margin-left: 1rem;
        font-size: 1.4rem;
        font-family: ${({ theme }) => theme.FONTS.PRIMARY};
        color: ${({ theme }) => theme.COLORS.GRAY800};
      }
    }
    button {
      background: none;
      border: none;
      font-size: 1.2rem;
      font-family: ${({ theme }) => theme.FONTS.PRIMARY};
      color: ${({ theme }) => theme.COLORS.RED700};
    }
  }
`;
