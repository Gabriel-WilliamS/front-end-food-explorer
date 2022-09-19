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
  input {
    color: white;
  }
  button {
    width: 30rem;
    align-self: flex-end;
  }
`;

export const FieldsWapper = styled.div`
  width: 100%;
  max-height: 46rem;
  display: flex;
  gap: 4rem;

  > div:first-child {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    gap: 2rem;
  }
  > div:last-child {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    gap: 2rem;
  }
`;
