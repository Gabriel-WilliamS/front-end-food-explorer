import styled from "styled-components";

export const Container = styled.tr`
  td {
    padding: 1.6rem;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

    &:nth-child(2) {
      text-transform: capitalize;
    }

    &:first-child {
      border-radius: 0.8rem 0 0 0.8rem;
    }

    &:last-child {
      border-radius: 0 0.8rem 0.8rem 0;
    }
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 1rem;

  button:nth-child(2) {
    padding: 0.5rem;
    border-radius: 0.8rem;
    background-color: ${({ theme }) => theme.COLORS.RED700};
    border: none;
  }
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
