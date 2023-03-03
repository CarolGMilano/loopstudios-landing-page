import styled from "styled-components";

import { white, beige } from "../../../UI/variables.js";

export const Item = styled.li `
  height: 120px; 
  margin-bottom: 1.5rem;

  @media screen and (min-width: 1024px) {
    height: 345px;
    margin-bottom: 0;
  }
`; 

export const ContainerLink = styled.a `
  display: inline-block;
  position: relative;
  height: 120px;
  overflow: hidden;

  &:hover {
    cursor: pointer;
  }   

  &::before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-image: linear-gradient(to right, black, transparent);
    filter: opacity(50%);
    transition: .3s;
  }  

  &:hover:before {
    background: ${beige};
    filter: opacity(70%);
  } 

  &:hover > span {
    color: black;
  }

  @media screen and (min-width: 1024px) {
    height: 345px;

    &::before {
      background-image: linear-gradient(to top, black, transparent);
    }  
  }  
`;  

export const LinkItem = styled.img `
  width: 100%;
  height: auto;

  @media screen and (min-width: 1024px) {
    height: 345px;
  }
`;

export const LinkTitle = styled.span `
  width: 130px;
  color: ${white};
  text-transform: uppercase;
  font-size: 25px;
  font-weight: 300;
  position: absolute;
  bottom: 20px;
  left: 20px;
  transition: .2s;
`; 