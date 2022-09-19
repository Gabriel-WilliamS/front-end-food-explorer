import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: 12.3rem auto;
  grid-template-areas:
    "header header"
    "sidemenu content";
`;

export const ContentWrapper = styled.main`
  grid-area: content;
  padding: 3rem;
`;
