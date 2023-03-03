import styled from "styled-components";
import { darkGray, white } from "../../UI/variables";

export const ContainerNav = styled.nav `
  display: flex;
  flex-direction: column;
  row-gap: 1.5rem;

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    column-gap: 1.5rem;
  }
`;

export const Link = styled.a `
  color: ${darkGray};
  text-transform: uppercase;
  font-size: 25px;
  position: relative;

  @media screen and (min-width: 1024px) {
    color: ${white};
    text-transform: initial;
    font-size: 20px;
    font-weight: bold;

    &::after {
      content: "";
      position: absolute;
      bottom: -5px;
      transform: translate(-50%);
      left: 50%;
      border-bottom: 2px solid ${white};
      width: 30px;
      opacity: 0;
      transition: .3s;
    }
  
    &:hover:after {
      opacity: 1;
    }
  }
`;