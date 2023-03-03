import React from "react";
import { 
  ContainerHighlight,
  Image,
  ContainerText, 
  Title,
  Text
} from "./styles";

import highlightImageMobile from "../../../assets/images/mobile/image-interactive.jpg";
import highlightImageDesktop from "../../../assets/images/desktop/image-interactive.jpg";


const Highlight = ({ size }) => {
  return (
    <ContainerHighlight>
      {size < 1024 
        ? <Image src={highlightImageMobile} alt="Image Hero"/>
        : <Image src={highlightImageDesktop} alt="Image Hero"/>
      }

      <ContainerText>
        <Title>The leader in interactive VR</Title>
        <Text>Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations have transformed businesses through digital experiences that bind to their brand.</Text>
      </ContainerText>
    </ContainerHighlight>
  );
}

export default Highlight;
