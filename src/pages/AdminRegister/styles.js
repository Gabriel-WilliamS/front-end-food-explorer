import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 0 1.6rem;
  overflow: hidden;

  > img {
    width: 22.5rem;
    height: fit-content;
  }
  > form {
    width: 100%;
    max-width: 40rem;
    height: 53rem;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    display: flex;
    flex-direction: column;
    border-radius: 1.6rem;
    justify-content: space-between;
    padding: 3rem 1.6rem;
    animation: rightToLeft 1s;

    input {
      &::placeholder {
        font-size: 1.3rem;
      }
    }

    > h1 {
      text-align: center;
      font-family: ${({ theme }) => theme.FONTS.SECONDY};
      font-size: 2.2rem;
    }

    > a {
      text-align: center;
    }
  }

  @media (min-width: 1024px) {
    display: flex;
    flex-direction: row;
    align-items: center;

    > img {
      width: fit-content;
      height: fit-content;
    }
    > form {
      width: 47.6rem;
      height: 60rem;
      justify-content: space-between;
      padding: 6.4rem;

      input {
        &::placeholder {
          font-size: 1.6rem;
        }
      }

      > h1 {
        font-size: 2.5rem;
      }
    }
  }
`;
