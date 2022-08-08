import styled from "styled-components";

export const Container = styled.div``;

export const ContentWrapper = styled.main`
  max-width: 112rem;
  margin: 0 auto;

  > .banner-content {
    width: 100%;
    height: 26rem;
    background-image: linear-gradient(#091e26, #00131c);
    margin-top: 16.4rem;
    border-radius: 0.8rem;
    position: relative;
    display: flex;
    align-items: center;

    > img {
      max-width: 66.1rem;
      max-height: 39.9rem;
      position: absolute;
      bottom: 0;
      left: 0;
    }

    > div {
      position: absolute;
      right: 4.6rem;

      p {
        font-size: 4rem;
        font-weight: 500;
      }

      span {
        font-weight: 400;
      }
    }
  }
`;
