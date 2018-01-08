import { app, BrowserWindow } from 'electron';
import is from 'electron-is';
import { join } from 'path';
import { Log } from './utils';
import Configs from './configs';
import debug from 'electron-debug';
import * as application from './services/app';
import * as window from './services/window';

Log('[app] start 😘');

if (is.dev()) debug();

app.on('ready', () => {
  Log('[app][platform]', process.platform);
  application.init();
  // 加载 devtools extension
  if (is.dev()) {
    const exPath = '../../extensions';
    BrowserWindow.addDevToolsExtension(join($dirname, exPath, 'react-devtools/2.5.2_0'));
    BrowserWindow.addDevToolsExtension(join($dirname, exPath, 'redux-devtools/2.15.1_0'));
  }
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (window.getCount() === 0) {
    application.init();
  }
});

app.on('quit', () => {
  Log('[app] quit');
});

// Register to global, so renderer can access these with remote.getGlobal
global.services = {
  application,
  window,
};

global.configs = Configs;
