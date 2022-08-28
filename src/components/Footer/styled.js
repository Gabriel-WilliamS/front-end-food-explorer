import styled from "styled-components";

export const Container = styled.footer`
  width: 100%;
  position: absolute;
  bottom: 0;
  margin-top: 9.8rem;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
`;

export const ContentWrapper = styled.div`
  max-width: 112rem;
  height: 12.3rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
