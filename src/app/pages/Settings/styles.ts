import styled from 'styled-components';

import colors from '~/styles/common/colors';

export const Container = styled.div`
  background-color: ${colors.purple};
  padding: 20px;
  padding-top: 40px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;

  h1 {
    color: #fff;
  }

  button {
    width: 300px;
    margin-bottom: 20px;
  }
`;

export const Panel = styled.div`
  max-width: 900px;
  width: 80vw;
  height: 100%;
  margin: 20px 0;
  padding: 40px;

  flex: 1;
  overflow-y: auto;

  background: rgba(255, 255, 255, 0.2);

  ul {
    li {
      list-style: none;
      margin-bottom: 20px;

      display: flex;
      align-items: center;

      label {
        text-align: right;
        padding-right: 15px;
        flex: 1;
        font-size: 20px;
        color: #fff;
      }
      div {
        flex: 1;
        padding-left: 15px;
      }
    }
  }
`;
