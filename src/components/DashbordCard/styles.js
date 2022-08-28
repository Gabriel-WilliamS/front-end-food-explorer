import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 18rem;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  border-radius: 2rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h2 {
    font-size: clamp(2rem, 3vw, 2.5rem);
  }

  span {
    font-size: clamp(3rem, 2vw, 5.2rem);
    align-self: flex-end;
    white-space: nowrap;
  }
`;
