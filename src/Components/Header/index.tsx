import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <Link
        to="/"
        style={{
          margin: '0 24px',
          color: '#fff',
          fontSize: '26px',
          textDecoration: 'none',
        }}
      >
        Spacex launchs data
      </Link>
      <aside>
        <Link to="/launches">Launches</Link>
      </aside>
    </Container>
  );
};

export default Header;
