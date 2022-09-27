import styled from "styled-components";

export const Container = styled.tr`
  td {
    padding: 1.6rem;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

    &:first-child {
      border-radius: 0.8rem 0 0 0.8rem;
      > div {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 0.8rem;
        div {
          width: 0.9rem;
          height: 0.9rem;
          border-radius: 50%;

          ${({ status }) => status === "Pendente" && "background-color: red"}
          ${({ status }) =>
            status === "Preparando" && "background-color: orange"}
          ${({ status }) => status === "Entregue" && "background-color: green"}
        }
      }
    }

    &:last-child {
      border-radius: 0 0.8rem 0.8rem 0;
    }
  }
`;

export const SelectStatus = styled.select`
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
`;
