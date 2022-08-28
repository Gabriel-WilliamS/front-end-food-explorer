import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  padding-bottom: 22.3rem;
`;

export const ContentWrapper = styled.main`
  max-width: 112rem;
  margin: 0 auto;
  padding-inline: 1.6rem;
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

    @media (max-width: 790px) {
      margin-top: 8rem;
      img {
        max-width: 56.1rem;
        max-height: 29.9rem;
        filter: brightness(0.5);
      }
    }
  }
`;
