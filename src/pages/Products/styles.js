import styled from "styled-components";

export const Table = styled.table`
  width: 100%;
  border-spacing: 0 1rem;

  th {
    font-size: 1.4rem;
    font-family: ${({ theme }) => theme.FONTS.PRIMARY};
    font-weight: 700;
    color: ${({ theme }) => theme.COLORS.GRAY700};
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    text-align: left;
    padding: 1.6rem;

    &:first-child {
      border-radius: 0.8rem 0 0 0.8rem;
    }

    &:last-child {
      border-radius: 0 0.8rem 0.8rem 0;
    }
  }
`;

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

export const TitlePage = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 3rem;
  > h1 {
    font-size: 3.2rem !important;
    font-weight: 500;
  }
  button {
    width: 30rem;
  }
`;
