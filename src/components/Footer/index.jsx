import React from "react";
import { 
  ContainerFooter, 
  Logo,
  Link,
  LinkSocial, 
  Container,
  List,
  Item,
  SocialContainer,
  Rights} from "./styles";

import logo from "../../assets/images/logo.svg";
import { ReactComponent as Facebook} from "./icon-facebook.svg";
import { ReactComponent as Instagram} from "./icon-instagram.svg";
import { ReactComponent as Twitter} from "./icon-twitter.svg";
import { ReactComponent as Pinterest} from "./icon-pinterest.svg";

const Footer = () => {
  const links = [
    "About",
    "Careers",
    "Events",
    "Products",
    "Support"
  ]

  return (
    <ContainerFooter>
      <Container>
        <Logo src={logo} alt="logo"/>

        <List>
          {links.map(link => {
            return (
              <Item key={link}>
                <Link href="/">{link}</Link>
              </Item>
            );
          })}
        </List>
      </Container>

      <Container>
          <SocialContainer>
            <LinkSocial href="/" aria-label="Facebook"><Facebook /></LinkSocial>
            <LinkSocial href="/" aria-label="Twitter"><Twitter /></LinkSocial>
            <LinkSocial href="/" aria-label="Pinterest"><Pinterest /></LinkSocial>
            <LinkSocial href="/" aria-label="Instagram"><Instagram /></LinkSocial>
          </SocialContainer>

          <Rights>© 2023 Loopstudios. All rights reserved.</Rights>
      </Container>
    </ContainerFooter>
  );
}

export default Footer;
