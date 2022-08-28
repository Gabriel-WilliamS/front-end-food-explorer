import styled from "styled-components";

export const Container = styled.div`
  padding-bottom: 22.3rem;
  position: relative;
  height: 100vh;
`;

export const ContentWrapper = styled.div`
  max-width: 112rem;
  margin: 0 auto;

  > button {
    background: none;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 4rem;
    margin-top: 2.4rem;
  }

  > main {
    display: flex;
    gap: 4.1rem;

    > img {
      max-width: 38.9rem;
      max-height: 38.9rem;
    }

    .content {
      h1 {
        font-size: 4rem;
        font-weight: 500;
        margin-bottom: 0.8rem;
      }

      p {
        font-size: 2.2rem;
        margin-bottom: 2.6rem;
      }

      .ingredients {
        display: flex;
        flex-wrap: wrap;
        gap: 2.2rem;

        img {
          width: 6rem;
          height: 6rem;
        }
        span {
          font-size: 1.8rem;
        }
      }

      .price-end-add {
        display: flex;
        align-items: center;
        gap: 5.6rem;
        margin-top: 5.9rem;

        > span {
          font-size: 3.2rem;
          font-family: ${({ theme }) => theme.FONTS.PRIMARY};
          color: ${({ theme }) => theme.COLORS.BLUE};
        }
        .add-button {
          width: 20rem;
        }
      }
    }
  }

  @media (max-width: 790px) {
    padding: 0 2rem;
    > main {
      flex-direction: column;
      align-items: center;

      .content {
        .price-end-add {
          width: 100%;
          display: flex;
          align-items: center;
          gap: 5.6rem;
          margin-top: 5.9rem;

          > span {
            white-space: nowrap;
          }
          .add-button {
            width: 100%;
          }
        }
      }
    }
  }
`;
