import React from 'react';

import { IoMdClose } from 'react-icons/io';
import { FiMaximize2 } from 'react-icons/fi';
import { FaWindowMinimize } from 'react-icons/fa';

import { Container } from './styles';

const WindowFrame: React.FC = ({ children }) => {
  const { ipcRenderer } = window.require('electron');

  return (
    <>
      <Container>
        <button type="button" onClick={() => ipcRenderer.send('MINIMIZE', {})}>
          <FaWindowMinimize style={{ width: 8 }} />
        </button>
        <button type="button" onClick={() => ipcRenderer.send('TOGGLE_FULLSCREEN', {})}>
          <FiMaximize2 style={{ width: 10 }} />
        </button>
        <button type="button" onClick={() => window.close()}>
          <IoMdClose style={{ width: 11 }} />
        </button>
      </Container>

      {children}
    </>
  );
};

export default WindowFrame;
