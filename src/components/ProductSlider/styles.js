import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  position: relative;
  -webkit-user-select: none;
  -moz-user-select: -moz-none;
  -ms-user-select: none;
  user-select: none;

  .swiper {
    width: 100%;
    height: 50rem;
  }

  ${({ data }) =>
    data.length > 3 &&
    `
    .swiper-background-prev {
    width: 5rem;
    height: 100%;
    position: absolute;
    background: linear-gradient(
      90deg,
      rgba(0, 10, 15, 0.272541) 0%,
      #000a0f 100%
    );
    transform: matrix(-1, 0, 0, 1, 0, 0);
    z-index: 100;
    top: 0;
  }

  .swiper-background-next {
    width: 5rem;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    background: linear-gradient(
      270deg,
      rgba(0, 10, 15, 0.272541) 0%,
      #000a0f 100%
    );
    transform: matrix(-1, 0, 0, 1, 0, 0);
    z-index: 100;
  }
  `}

  .swiper-button-next,
  .swiper-button-prev {
    z-index: 200;
  }

  .swiper-slide {
    background: #00000032;
    border-radius: 0.8rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    text-align: center;
    padding: 4.2rem 1.6rem;
    border: 1px solid #000;
    .heart-icon {
      width: 2.5rem;
      height: 2.5rem;
      position: absolute;
      right: 4.1rem;
      top: 2.1rem;
      color: red;
    }
    .heart-icon.like {
      fill: #900;
    }

    > img {
      width: 17.6rem;
      height: 17.6rem;
      cursor: pointer;
    }
    > strong {
      font-size: 2.4rem;
      font-weight: 700;
      color: ${({ theme }) => theme.COLORS.GRAY700};
    }

    > p {
      font-size: 1.4rem;
      font-family: ${({ theme }) => theme.FONTS.PRIMARY};
    }

    > span {
      font-size: 3.2rem;
      font-family: ${({ theme }) => theme.FONTS.PRIMARY};
      color: ${({ theme }) => theme.COLORS.BLUE};
    }

    > div {
      display: flex;
      align-items: center;
      gap: 1.9rem;

      > button {
        width: 9.2rem;
      }
    }

    .counter {
      display: flex;
      align-items: center;
      gap: 1.7rem;
      button {
        background: none;
        border: none;

        img {
          width: 2.4rem;
          height: 2.4rem;
        }
      }

      span {
        font-size: 2rem;
        font-weight: 700;
        font-family: ${({ theme }) => theme.FONTS.PRIMARY};
      }
    }
  }
`;
