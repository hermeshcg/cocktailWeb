import React from 'react';

import { Container } from './styles';

const HomeCard: React.FC = () => {
  return (
    <Container>
      <h1>Data about spacex things going to space :)</h1>
      <p>
        In this website you will find data about some SpaceX launches, vehicles
        and other stuff
      </p>
      <p>You can see all this data by clicking in any link in the header </p>
    </Container>
  );
};

export default HomeCard;
