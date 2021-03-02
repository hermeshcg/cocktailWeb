import React, { useEffect, useState } from 'react';
import Header from '../../Components/Header';
import LaunchesCard from '../../Components/LaunchesCard';
import api from '../../services/api';
import { Container } from './styles';

function Launches() {
  const [launches, setLaunches] = useState([]);

  useEffect(() => {
    async function getData() {
      await api
        .get('/launches')
        .then((response) => {
          setLaunches(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    getData();
  }, []);

  return (
    <Container>
      <Header />
      <LaunchesCard launches={launches} />
    </Container>
  );
}

export default Launches;
