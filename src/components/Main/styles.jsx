import styled from "styled-components";

export const ContainerMain = styled.main `
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  padding: 5rem 1.5rem;

  @media screen and (min-width: 1024px) {
    padding: 10rem 6rem;
    justify-content: center;
    align-items: center;
  }
`;