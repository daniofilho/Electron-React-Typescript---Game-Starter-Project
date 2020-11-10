import { app, BrowserWindow, ipcMain } from 'electron';

import trayicon from '@static/trayicon.png';

import path from 'path';

declare const MAIN_WINDOW_WEBPACK_ENTRY: string;
declare const MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY: string;

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) {
  // eslint-disable-line global-require
  app.quit();
}

const createWindow = (): void => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 1360,
    minWidth: 1360,
    height: 768,
    minHeight: 768,
    show: false,
    frame: false, // hide top bar from window
    icon: path.join(__dirname, trayicon),
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
      preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY,
    },
  });

  // and load the index.html of the app.
  mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);

  // Show window when its ready to
  mainWindow.on('ready-to-show', () => mainWindow.show());

  // Prevent devtools to bem opened
  /*mainWindow.webContents.on('devtools-opened', () => {
    mainWindow.webContents.closeDevTools();
  });*/

  /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

  // # Custom events from React App

  // # Fullscreen
  ipcMain.on('TOGGLE_FULLSCREEN', () => {
    mainWindow.setFullScreen(!mainWindow.isFullScreen());
  });

  // # Minimize
  ipcMain.on('MINIMIZE', () => {
    mainWindow.minimize();
  });
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
