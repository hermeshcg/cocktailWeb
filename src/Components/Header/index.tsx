import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <h1>Spacex launchs data</h1>
      <aside>
        <Link to="/launches">Launches</Link>
      </aside>
    </Container>
  );
};

export default Header;
