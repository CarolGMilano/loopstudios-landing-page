import React from "react";

import { 
  ContainerCreations, 
  Title,
  List,
  Button } from "./styles";
  
import creations from "./Creations.json";
import Card from "./Card";

const Creations = ({ size }) => {
  return (
    <ContainerCreations>
      <Title>Our creations</Title>

      <List>
        {creations.map(creation => {
          return (
            <Card 
              key={creation.name}
              mobile={creation.imageMobile}
              desktop={creation.imageDesktop}
              name={creation.name}
              size={size}
            />
          );
        })
        }
      </List>
      
      <Button>See all</Button>
    </ContainerCreations>
  );
}

export default Creations;
