import styled from "styled-components";

export const Container = styled.div`
  max-width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: end;
  gap: 2rem;
  textarea {
    width: 100%;
    height: 100%;
    resize: none;

    background-color: transparent;
    border: 1px solid;
    ${({ theme, error }) => (error ? theme.COLORS.RED700 : theme.COLORS.WHITE)};
    border-radius: 0.5rem;
    padding: 1.2rem 1.4rem;
  }
`;
