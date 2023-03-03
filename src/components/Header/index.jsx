import React, { useState } from "react";
import {  
  ContainerHeader, 
  Container,
  MenuClose,
  Logo,
  ContainerText,
  Text
} 
from "./styles.jsx";

import logo from "../../assets/images/logo.svg";
import MenuOpen from "./MenuOpen/index.jsx";
import NavBar from "./NavBar/index.jsx";

const Header = ({ size }) => {
  const [menu, setMenu] = useState(false);
  
  const openMenu = () => {
    return setMenu(true);
  }
  
  const closeMenu = () => {
    return setMenu(false);
  }

  return (
    <ContainerHeader>
      <Container>
        <Logo src={logo}/>
        
        {size < 1024
         ?  <>
              <MenuClose onClick={() => openMenu()}/>
              {menu ? <MenuOpen closeMenu={closeMenu}/> : ""}
            </>
         :  <NavBar />
        }       
      </Container>

      <ContainerText>
        <Text>Immersive experiences that deliver</Text>
      </ContainerText>
    </ContainerHeader>
  );
}

export default Header;
