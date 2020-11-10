import React from 'react';
import { Link } from 'react-router-dom';

import { useI18N } from '~/i18n';

import Button from '~/components/Button';

import { Container } from './styles';

const MainMenu: React.FC = () => {
  const { t } = useI18N();

  return (
    <Container>
      <ul>
        <li>
          <Link to="/game">
            <Button theme="blue" type="button">
              {t.common.play}
            </Button>
          </Link>
        </li>
        <li>
          <Link to="/settings">
            <Button theme="blue" type="button">
              {t.common.settings}
            </Button>
          </Link>
        </li>
        <li>
          <Button theme="blue" type="button" onClick={() => window.close()}>
            {t.common.quit}
          </Button>
        </li>
      </ul>
    </Container>
  );
};

export default MainMenu;
