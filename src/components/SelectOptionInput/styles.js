import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  > select {
    height: 4.8rem;
    max-height: 8rem;
    overflow: auto;
    border-radius: 0.5rem;
    padding: 0 1.4rem;

    border: 1px solid
      ${({ theme, borderError, error }) =>
        borderError && error ? theme.COLORS.RED700 : theme.COLORS.WHITE};
    background-color: transparent;

    option {
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
    }
  }
`;
