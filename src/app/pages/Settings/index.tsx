import React from 'react';
import { Link } from 'react-router-dom';

import { useI18N } from '~/i18n';
import { avaiableLocales } from '~/i18n/init';

import { useSettings } from '~/hooks/useSettings';

import Button from '~/components/Button';

import { Container, Panel } from './styles';

const MainMenu: React.FC = () => {
  const { t } = useI18N();
  const {
    data: { locale },
    updateSetting,
  } = useSettings();

  return (
    <Container>
      <h1>{t.common.settings}</h1>
      <Panel>
        <ul>
          <li>
            <label>{t.settings.language}:</label>
            <div>
              <select value={locale} onChange={(e) => updateSetting('locale', e.target.value)}>
                {avaiableLocales.map((e) => {
                  return <option key={e}>{e}</option>;
                })}
              </select>
            </div>
          </li>
        </ul>
      </Panel>

      <Link to="/main-menu">
        <Button theme="blue" type="button">
          {t.common.back}
        </Button>
      </Link>
    </Container>
  );
};

export default MainMenu;
