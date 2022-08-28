import styled from "styled-components";

export const DashbordCardContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 3rem;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  border-radius: 2rem;
  padding: 2rem;

  @media (max-width: 1040px) {
    flex-direction: column;
  }
`;
