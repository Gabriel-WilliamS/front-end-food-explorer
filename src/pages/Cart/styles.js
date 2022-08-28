import styled from "styled-components";

export const Container = styled.div`
  padding-bottom: 22.3rem;
  position: relative;
  height: 100vh;
  > header {
    margin-bottom: 3.4rem;
  }
`;

export const ContentWrapper = styled.div`
  max-width: 112rem;
  margin: 0 auto;

  gap: 7.5rem;

  > button {
    background: none;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 4rem;
    margin-top: 2.4rem;
  }
`;

export const Content = styled.div`
  max-width: 112rem;
  margin: 0 auto;
  display: flex;
  gap: 7.5rem;

  > .container-orders {
    width: 44.4rem;
    > h2 {
      font-size: 3.2rem;
      font-weight: 500;
      margin-bottom: 3.2rem;
    }
    strong {
      display: block;
      font-weight: 500;
      font-size: 2rem;
    }

    .orders {
      margin-bottom: 3rem;
    }
  }

  .container-payment {
    width: 53rem;
    h2 {
      font-size: 3.2rem;
      font-weight: 500;
      margin-bottom: 3.2rem;
    }
    .payment {
      display: flex;
      button {
        width: 100%;
        height: 8.1rem;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.8rem;
        background: none;
        border: 1px solid #ffffff15;
        &.selected {
          background-color: #ffffff05;
        }
        &:first-child {
          border-top-left-radius: 0.8rem;
        }

        &:last-child {
          border-top-right-radius: 0.8rem;
        }
      }
    }

    .paymentMethodPix {
      max-width: 53rem;
      height: 39rem;
      border: 1px solid #ffffff15;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      img {
        max-width: 25rem;
        max-height: 25rem;
      }

      button {
        margin-top: 5rem;
        width: 34.8rem;
      }
    }

    .paymentMethodCard {
      max-width: 53rem;
      height: 39rem;
      border: 1px solid #ffffff15;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        width: fit-content;
      }

      form {
        width: 34.8rem;
        height: 35rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .col-2 {
          display: flex;
          gap: 1.7rem;
          input {
            width: 100%;
          }
        }
      }
    }
  }

  @media (max-width: 790px) {
    flex-direction: column;
    align-items: center;

    .container-payment {
      width: 43rem;
    }
  }
`;
