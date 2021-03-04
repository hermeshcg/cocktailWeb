import React from 'react';

import { Container } from './styles';

/* interface Launch {
  launch: {
    fairings: {
      reused: boolean;
      recovery_attempt: boolean;
      recovered: boolean;
    };
    links: {
      patch: {
        small: string;
      };
      reddit: {
        campaign: string;
        launch: string;
      };
      flickr: {
        original: Array<string>;
      };
      webcast: string;
    };
    name: string;
    date_unix: number;
    cores: [
      {
        flight: string;
        reused: boolean;
        landing_attempt: true;
        landing_success: true;
      }
    ];
  };
}*/

function LaunchCard(launch: any) {
  return (
    <Container>
      <h1>{launch.launch.name}</h1>
      <div className="photos">
        <ul>
          Images
          {launch.launch.links.flickr.original.map(
            (photo: string, index: number) => (
              <li>
                <a href={photo} target="_blank" rel="noopener noreferrer">
                  See image {index + 1}
                </a>
              </li>
            )
          )}
        </ul>
      </div>
    </Container>
  );
}

export default LaunchCard;
