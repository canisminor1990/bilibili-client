import { create, getPath } from './window';
import { ipcMain as ipc } from 'electron';
import log from 'electron-log';

export function init() {
  log.info('application：init');
  const win = create({ width: 375, height: 650, frame: false, resizable: false });
  win.loadURL(getPath());
  win.setAlwaysOnTop(true);

  ipc.on('close-main-window', () => {
    win.minimize();
  });

  ipc.on('resizable-on', () => {
    win.setResizable(true);
  });

  ipc.on('resizable-off', () => {
    win.setResizable(false);
  });
}
