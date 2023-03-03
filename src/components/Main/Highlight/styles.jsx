import styled from "styled-components";
import { black, darkGray, white, alata } from "../../UI/variables.js";

export const ContainerHighlight = styled.div `
  display: flex;
  flex-direction: column;
  row-gap: 3rem;
  margin-bottom: 5rem;
  
  @media screen and (min-width: 1024px) {
    flex-direction: row;
    align-items: end;
    justify-content: center;
    margin-bottom: 10rem;
    max-width: 1135px;
  }
`;

export const Image = styled.img `
  width: 100%;

  @media screen and (min-width: 1024px) {
    width: 60%;
  }
`;

export const ContainerText = styled.div `
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  text-align: center;
  padding: 0 1rem;

  @media screen and (min-width: 1024px) {
    height: min-content;
    background-color: ${white};
    margin-left: -15%;
    margin-bottom: -2px;
    padding: 5rem 5rem 0 5rem;
    text-align: start;
  }
`;

export const Title = styled.h2 `
  text-transform: uppercase;
  font-size: 35px;
  font-weight: 300;
  color: ${black};

  @media screen and (min-width: 1024px) {
    font-size: 48px;
  }
`;

export const Text = styled.p `
  font-family: ${alata};
  color: ${darkGray};
  font-size: 17px;

  @media screen and (min-width: 1024px) {
    font-size: 15px;
  }
`;