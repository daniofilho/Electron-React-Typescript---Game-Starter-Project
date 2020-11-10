import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import splashscreen from '@static/images/splashscreen.png';

import { Container } from './styles';

const SplashScreen: React.FC = () => {
  const history = useHistory();

  useEffect(() => {
    setTimeout(() => {
      history.push('/main-menu');
    }, 3000);
  }, []);

  return (
    <Container>
      <img src={splashscreen} alt="DanCorp Entertainment Studio" />
    </Container>
  );
};

export default SplashScreen;
