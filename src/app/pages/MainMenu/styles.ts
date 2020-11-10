import styled from 'styled-components';

import colors from '~/styles/common/colors';

export const Container = styled.div`
  background-color: ${colors.purple};

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;

  ul {
    li {
      button {
        width: 300px;
        margin-bottom: 20px;
      }
    }
  }
`;
