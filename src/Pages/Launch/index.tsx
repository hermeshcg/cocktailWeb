import React, { useEffect, useState } from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import Header from '../../Components/Header';
import LaunchCard from '../../Components/LaunchCard';
import api from '../../services/api';

import { Container } from './styles';

interface ID {
  id: string;
}

function Launch() {
  const [loading, setLoading] = useState(false);
  const [launch, setLaunch] = useState({});
  const { id } = useParams<ID>();

  useEffect(() => {
    setLoading(true);
    async function getData() {
      await api
        .get(`/launches/${id}`)
        .then((response) => {
          setLaunch(response.data);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
          toast.error('Error 400, data not found');
        });
    }
    getData();
  }, [id]);

  console.log(launch);

  return (
    <Container>
      <Header />
      {loading ? <AiOutlineLoading3Quarters /> : <LaunchCard launch={launch} />}
    </Container>
  );
}

export default Launch;
