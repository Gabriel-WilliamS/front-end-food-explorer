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
          ${({ status }) => status === "Entrege" && "background-color: green"}
        }
      }
    }

    &:last-child {
      border-radius: 0 0.8rem 0.8rem 0;
    }
  }
`;
