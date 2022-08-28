import styled from "styled-components";

export const Container = styled.div`
  height: 4.8rem;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  display: flex;
  align-items: center;
  gap: 1.4rem;
  border-radius: 0.5rem;

  > img {
    max-width: 2.5rem;
    max-height: 2.4rem;
    margin-left: 1.4rem;
  }

  > input {
    width: 100%;
    height: 100%;
    background: transparent;
    border: none;

    &:disabled {
      &:hover {
        cursor: no-drop;
      }
    }
  }
`;
