import styled from "styled-components";
import bgMobile from "../../assets/images/mobile/image-hero.jpg";
import bgDesktop from "../../assets/images/desktop/image-hero.jpg";
import menuClose from "../../assets/images/icon-hamburger.svg";
import { white } from "../UI/variables.js";

export const ContainerHeader = styled.header `
  width: 100vw;
  height: 100vh;
  background-image: url(${bgMobile});
  background-repeat: no-repeat;
  background-size: cover;
  padding: 3rem 2rem;
  position: relative;

  @media screen and (min-width: 1024px) {
    background-image: url(${bgDesktop});
    padding: 3rem 10rem;
  }
`;

export const Container  = styled.div `
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MenuClose = styled.button `
  width: 24px;
  height: 16px;
  background: url(${menuClose});
  background-repeat: no-repeat;
  background-size: cover;
  border: none;
`;

export const Logo = styled.img `
  width: auto;
  height: 26px;

  @media screen and (min-width: 1024px) {
    height: 32px;
  }
`;

export const ContainerText = styled.div `
  border: 1px solid ${white};
  padding: 1.5rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media screen and (min-width: 1024px) {
    top: initial;
    bottom: 25%;
    left: 10rem;
    transform: translate(0, 25%);
    width: 450px;
    padding: 2rem;
  }

  @media screen and (min-width: 1440px) {
    width: 600px;
  }
`;

export const Text = styled.h1 `
  color: ${white};
  font-size: 45px;
  font-weight: 300;
  text-transform: uppercase;
  line-height: 2.7rem;

  @media screen and (min-width: 1024px) {
    font-size: 50px;
    line-height: 3rem;
  }

  @media screen and (min-width: 1440px) {
    font-size: 70px;
    line-height: 5rem;
  }
`;