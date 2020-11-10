import styled from 'styled-components';

import colors from '~/styles/common/colors';

export const Container = styled.div`
  /* Makes the bar draggable */
  -webkit-user-select: none;
  -webkit-app-region: drag;

  position: fixed;
  top: 0;
  width: 100vw;

  display: flex;
  flex-direction: row;
  justify-content: flex-end;

  background-color: rgba(0, 0, 0, 0);
  padding: 5px 0px;
  transition: 0.2s;

  button {
    /* prevent draggin on buttons */
    -webkit-app-region: no-drag;

    background: ${colors.red};
    border-width: 0px;
    border-bottom: 3px solid ${colors.brown};
    border-radius: 2px;
    margin: 0px 5px;

    width: 20px;
    height: 20px;

    transition: 0.1s;

    svg {
      color: #fff;
    }

    &:hover {
      transform: scale(1.1);
    }
  }
`;
