import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

interface Launches {
  launches: Array<{
    links: {
      patch: {
        small: string;
      };
    };
    success: boolean;
    flight_number: string;
    id: string;
    name: string;
  }>;
}

function LaunchesCard(launches: Launches) {
  return (
    <Container>
      <div className="countries-container">
        {launches.launches.map((launch) => (
          <Link
            to={`/launch/${launch.id}`}
            key={launch.name}
            className="country-card"
          >
            <img src={launch.links.patch.small} alt={launch.name} />
            <h3>{launch.name}</h3>
            <strong>
              Flight Number: <span>{launch.flight_number}</span>
            </strong>
            <strong>
              Success: <span>{launch.success ? 'Yes' : 'No'}</span>
            </strong>
          </Link>
        ))}
      </div>
    </Container>
  );
}

export default LaunchesCard;
