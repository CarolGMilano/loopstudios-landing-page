import styled from "styled-components";
import { black, alata, white } from "../../UI/variables.js";

export const ContainerCreations = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(2, auto);
    grid-template-rows: repeat(2, auto);
    grid-template-areas: 
      "title button"
      "cards cards"
    ;
    row-gap: 5rem;

    max-width: 835px;
  }
`;

export const Title = styled.h3 `
  color: ${black};
  text-transform: uppercase;
  font-size: 35px;
  text-align: center;
  font-weight: 300;
  padding-bottom: 2rem;

  @media screen and (min-width: 1024px) {
    grid-area: title;
    padding-bottom: 0;
    text-align: start;
    font-size: 45px;
  }
`;

export const List = styled.ul `
  @media screen and (min-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(4, auto);
    grid-template-rows: repeat(2, auto);
    grid-area: cards;
    gap: 1.5rem;
  }
`;

export const Button = styled.button `
  padding: .8rem 2rem;
  border: 2px solid ${black};
  text-transform: uppercase;
  background: transparent;
  color: ${black};
  font-family: ${alata};
  font-size: 18px;
  letter-spacing: .5rem;
  transition: .3s;

  &:hover {
    background: ${black};
    color: ${white};
    cursor: pointer;
  }

  @media screen and (min-width: 1024px) {
    width: 160px;
    grid-area: button;
    padding: .5rem 0;
    font-size: 15px;
    text-align: center;
    justify-self: end;
  }
`;