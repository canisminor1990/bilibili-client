import { Log } from '../utils';
import { ipcMain as ipc, shell } from 'electron';

let size = [375, 210];

export default win => {
  ipc.on('console-msg', (event, data) => {
    Log(`[webview]${data}`);
  });
  ipc.on('link', (event, data) => {
    shell.openExternal(data);
  });
  ipc.on('close-main-window', () => {
    win.minimize();
  });
  ipc.on('video-on', () => {
    win.setSize(size[0], size[1], true);
    win.setResizable(true);
  });
  ipc.on('video-off', () => {
    win.setSize(375, 650, true);
    win.setResizable(false);
  });
  ipc.on('resize', () => {
    size = win.getSize();
    Log('[app][resize]', size);
  });
  Log('[app][ipc] load');
};
