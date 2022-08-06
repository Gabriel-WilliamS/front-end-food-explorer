import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  height: 4.8rem;
  background-color: ${({ theme }) => theme.COLORS.RED800};
  color: ${({ theme }) => theme.COLORS.WHITE};
  border-radius: 0.5rem;
  border: none;
`;
