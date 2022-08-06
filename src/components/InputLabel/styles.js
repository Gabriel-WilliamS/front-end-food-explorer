import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  > input {
    height: 4.8rem;
    padding: 1.2rem 1.4rem;
    background-color: transparent;
    border: 1px solid ${({ theme }) => theme.COLORS.WHITE};
    border-radius: 0.5rem;
  }

  > span {
    color: ${({ theme }) => theme.COLORS.RED900};
  }
`;
