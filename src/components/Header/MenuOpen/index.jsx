import React from "react";
import { Logo } from "../styles";
import { 
  ButtonClose, 
  ContainerMenu,
  Container
} from "./styles";
import logo from "../../../assets/images/logo.svg";
import NavBar from "../NavBar";

const MenuOpen = ({ closeMenu }) => {
  return (
    <ContainerMenu>
      <Container>
        <Logo src={logo}/>
        <ButtonClose onClick={() => closeMenu()}/>
      </Container>

      <NavBar />
    </ContainerMenu>
  );
}

export default MenuOpen;
