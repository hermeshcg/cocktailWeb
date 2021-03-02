import React from 'react';

import { Container } from './styles';

import Header from '../../Components/Header';
import HomeCard from '../../Components/HomeCard';

const Home: React.FC = () => {
  return (
    <Container>
      <Header />
      <HomeCard />
    </Container>
  );
};

export default Home;
