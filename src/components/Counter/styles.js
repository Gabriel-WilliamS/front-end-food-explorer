import styled from "styled-components";

export const Container = styled.div`
  max-width: 11rem;
  display: flex;
  align-items: center;
  gap: 1.7rem;
  button {
    background: none;
    border: none;

    img {
      width: 2.4rem;
      height: 2.4rem;
    }
  }

  span {
    font-size: 2rem;
    font-weight: 700;
    font-family: ${({ theme }) => theme.FONTS.PRIMARY};
  }
`;
