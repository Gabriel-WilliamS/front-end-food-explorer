import styled from "styled-components";

export const Container = styled.div`
  width: 6rem;
  height: 100%;
  grid-area: sidemenu;

  transition: all 0.5s;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  overflow-x: hidden;
  &.menuOpen {
    width: 24rem;
  }
`;

export const ItemList = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 7rem;
  transition: all 0.5s;

  gap: 1rem;
  font-size: 1.8rem;
  background-color: ${({ theme, isActive }) =>
    isActive ? theme.COLORS.BACKGROUND_600 : ""};

  &:hover {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
  }

  svg {
    font-size: 3rem;
  }
`;
