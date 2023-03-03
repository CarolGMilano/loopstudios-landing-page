import React from "react";
import {
  ContainerNav,
  Link
} from "./styles";

const NavBar = () => {
  const links = [
    "About",
    "Careers",
    "Events",
    "Products",
    "Support"
  ];

  return (
    <ContainerNav>
      {links.map(link => {
        return <Link key={link} href="/">{link}</Link>;
      })}
    </ContainerNav>
  );
}

export default NavBar;
