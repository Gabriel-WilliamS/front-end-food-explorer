import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  inset: 0;
  background-color: #00000040;
  z-index: 1;

  > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 50rem;
    height: 20rem;
    position: fixed;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
    border-radius: 2rem;
    top: 40%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    z-index: 5;
    padding: 2rem;
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  svg {
    cursor: pointer;
    transition: all 0.3s;
    &:hover {
      fill: ${({ theme }) => theme.COLORS.RED700};
    }
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 2rem;
  h2 {
    font-size: 2rem;
  }

  p {
    margin-top: 1rem;
  }
`;
