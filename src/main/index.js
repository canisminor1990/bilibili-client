import { app, BrowserWindow } from 'electron';
import is from 'electron-is';
import { join } from 'path';
import log from 'electron-log';
import debug from 'electron-debug';
import * as application from './services/application';
import * as window from './services/window';
import * as menu from './services/menu';
import * as config from './configs/config';

log.transports.file.level = 'info';

log.info('=================================');
log.info('main：start');

if (is.dev()) debug();

app.on('ready', () => {
  log.info(`main：root:Platform：${process.platform}`);
  application.init();
  menu.init();
  // 加载 devtools extension
  if (is.dev()) {
    BrowserWindow.addDevToolsExtension(join($dirname, '../../extensions/react-devtools/2.5.2_0'));
    BrowserWindow.addDevToolsExtension(join($dirname, '../../extensions/redux-devtools/2.15.1_0'));
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
  log.info('main：stop');
  log.info('=================================');
});

// Register to global, so renderer can access these with remote.getGlobal

global.services = {
  application,
  window,
};

global.configs = {
  config,
};
