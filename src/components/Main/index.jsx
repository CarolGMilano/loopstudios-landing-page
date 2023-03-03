import React from "react";
import Creations from "./Creations";
import Highlight from "./Highlight";
import { ContainerMain } from "./styles";

const Main = ({ size }) => {
  return (
    <ContainerMain>
      <Highlight size={size}/>
      <Creations size={size}/>
    </ContainerMain>
  );
}

export default Main;
