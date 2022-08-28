import styled from "styled-components";

export const Container = styled.header`
  grid-area: header;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
`;

export const ContentWrapper = styled.div`
  height: 12.3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 3.2rem;
`;

export const MenuContent = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  gap: 1.6rem;
`;

export const SideNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 6rem;
  height: 100%;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  > img {
    width: 2rem;
  }
  transition: all 0.5s;

  &.menuOpen {
    width: 24rem;
    > img {
      width: 15rem;
      transition: all 0.5s;
    }
  }
`;
