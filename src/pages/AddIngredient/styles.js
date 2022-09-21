import styled from "styled-components";

export const Container = styled.div`
  max-width: 80%;
  margin: 0 auto;
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  > div:nth-child(1) {
    display: flex;
    height: 26rem;
    max-height: 26rem;
    gap: 2rem;
  }

  button {
    margin-top: 2rem;
  }
`;

export const FieldsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  height: 26rem;
  max-height: 26rem;

  > div:last-child {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    height: 100%;

    > div {
      height: 13rem;
      padding: 1rem;
      background-color: transparent;
      border: 0.1px solid ${({ theme }) => theme.COLORS.WHITE};
      border-radius: 0.5rem;
      overflow: auto;
    }
  }
`;

export const ProductsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;

  > span {
    width: fit-content;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
    height: 2.8rem;
    display: flex;
    align-items: center;
    padding: 0.8rem;
    border-radius: 0.5rem;

    &:hover {
      filter: brightness(0.8);
    }
  }
`;
