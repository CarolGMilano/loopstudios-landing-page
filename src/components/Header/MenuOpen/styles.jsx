import styled from "styled-components";
import { black } from "../../UI/variables.js";
import menuOpen from "../../../assets/images/icon-close.svg";

export const ContainerMenu = styled.div `
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  row-gap: 7rem;
  background-color: ${black};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
  padding: 3rem 2rem;
`;

export const ButtonClose = styled.button `
  width: 24px;
  height: 16px;
  background: url(${menuOpen});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  border: none;
  text-align: end;
`;

export const Container = styled.div `
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;