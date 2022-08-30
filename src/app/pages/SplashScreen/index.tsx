import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import splashscreen from '@static/images/splashscreen.jpg';

import { Container } from './styles';

const SplashScreen: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/main-menu');
    }, 3000);
  }, []);

  return (
    <Container>
      <img src={splashscreen} alt="DanCorp Entertainment Studio" />
    </Container>
  );
};

export default SplashScreen;
