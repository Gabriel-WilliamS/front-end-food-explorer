import styled from "styled-components";

export const Container = styled.tr`
  td {
    padding: 1.6rem;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    height: 100%;
    &:first-child {
      border-radius: 0.8rem 0 0 0.8rem;
    }

    &:last-child {
      border-radius: 0 0.8rem 0.8rem 0;
    }

    &:nth-child(3) {
      div {
        display: flex;
        height: 100%;
        align-items: center;
        gap: 0.5rem;

        svg {
          fill: ${({ theme, hasImage }) =>
            hasImage ? theme.COLORS.GREEN : theme.COLORS.RED800};
        }
      }
    }
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

export const EditButton = styled.button`
  padding: 0.5rem;
  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.COLORS.ORANGE};
  border: none;
`;
export const DeleteButton = styled.button`
  padding: 0.5rem;
  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.COLORS.RED700};
  border: none;
`;
