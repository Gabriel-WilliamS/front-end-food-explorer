import styled from "styled-components";

export const Container = styled.header`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
`;

export const ContentWrapper = styled.div`
  max-width: 112rem;
  height: 12.3rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.6rem;

  > .logo {
    width: 19.7rem;
    margin-right: 3.2rem;
    cursor: pointer;
  }

  .menu {
    width: 75%;
    height: 100%;
    position: absolute;
    background-color: #000d12;
    top: 0;
    right: 0;
    z-index: 10;
    transform: translateX(100%);
    transition: all 0.3s;
    padding-top: 12.3rem;

    > ul {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      li {
        width: 100%;
        height: 10rem;
        display: flex;
        align-items: center;
        justify-content: left;
        padding-left: 6rem;
        gap: 2.5rem;
        cursor: pointer;
        &:nth-child(odd) {
          background: #010a0d;
        }
      }
    }
  }
  .menu.open {
    transform: translateX(0);
  }

  .container-menu {
    display: none;
  }

  @media (min-width: 790px) {
    .menu {
      display: none;
    }
    .hambMenu {
      display: none;
    }

    .container-menu {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .cart {
        width: fit-content;
        position: relative;
        cursor: pointer;
        span {
          width: 1.8rem;
          height: 1.8rem;
          font-size: 1.1rem;
          background-color: red;
          display: flex;
          justify-content: center;
          align-items: center;
          position: absolute;
          top: -0.3rem;
          right: -0.7rem;
          border-radius: 70%;
          z-index: 200;
        }
      }

      > button {
        width: 21.6rem;
        height: 5.6rem;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1.1rem;
        background-color: ${({ theme }) => theme.COLORS.RED900};
        border-radius: 0.5rem;
        border: none;

        img {
          width: 2.6rem;
          height: 2.2rem;
        }
      }

      div {
        width: 41rem;
      }
    }
  }
`;
