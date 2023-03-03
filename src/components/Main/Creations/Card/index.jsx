import React from "react";

import {
  ContainerLink,
  Item,
  LinkItem,
  LinkTitle
} from "./styles";

const Card = ({ mobile, desktop, name, size }) => {
  return (
    <Item key={name}>
      <ContainerLink href="/">
        <LinkItem src={size < 1024 ? mobile : desktop} alt=""/>
        <LinkTitle>{name}</LinkTitle>
      </ContainerLink> 
    </Item>
  );
}

export default Card;
