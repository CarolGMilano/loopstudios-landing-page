import styled from "styled-components";
import { black, white, veryDarkGray, alata } from "../UI/variables.js";

export const ContainerFooter = styled.footer `
  width: 100%;
  padding: 3rem 1rem;
  text-align: center;
  background-color: ${black};

  @media screen and (min-width: 1024px) {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    padding: 3rem 5rem;
  }
`;

export const Container = styled.div `
  display: grid;
  flex-direction: column;
  row-gap: 2rem;
  align-items: center; 
  justify-content: center;
  
  @media screen and (min-width: 1024px) {
    align-items: start; 
    row-gap: 1.5rem;
  }
`;

export const Logo = styled.img `
  width: auto;
  height: 20px;

  @media screen and (min-width: 1024px) {
    height: 25px;
  }
`;

export const List = styled.ul `
  @media screen and (min-width: 1024px) {
    display: flex;
    column-gap: 1.5rem;
  }
`;

export const Item = styled.li `
  margin-bottom: 1.5rem;

  @media screen and (min-width: 1024px) {
    margin-bottom: 0;
  }
`;

export const Link = styled.a `
  color: ${white};
  font-size: 18px;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -5px;
    transform: translate(-50%);
    left: 50%;
    border-bottom: 1px solid ${white};
    width: 30px;
    opacity: 0;
    transition: .3s;
  }

  &:hover:after {
    opacity: 1;
  }
`;

export const LinkSocial = styled.a `
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -5px;
    transform: translate(-50%);
    left: 50%;
    border-bottom: 2px solid ${white};
    width: 20px;
    opacity: 0;
    transition: .3s;
  }

  &:hover:after {
    opacity: 1;
  }
`;

export const SocialContainer = styled.div `
  display: flex;
  column-gap: 1rem;
  margin-top: 1.5rem;
  align-items: center;
  justify-self: center;

  @media screen and (min-width: 1024px) {
    margin-top: 0;
    justify-self: end;
  }
`;

export const Rights = styled.span `
  color: ${veryDarkGray};
  font-family: ${alata};
  font-size: 18px;

  @media screen and (min-width: 1024px) {
    font-size: 15px;
  }
`;

