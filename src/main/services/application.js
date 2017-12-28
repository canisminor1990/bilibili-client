import { create, getPath } from './window';
import { ipcMain as ipc, shell, dialog } from 'electron';
import appData from '../../../package.json';
import fetch from 'electron-fetch';
import log from 'electron-log';

let size = [375, 210];

export function init() {
  log.info('application：init');
  const win = create({ width: 375, height: 650, frame: false, resizable: false });
  win.loadURL(getPath());
  win.setAlwaysOnTop(true);

  ipc.on('console-msg', (event, data) => {
    log.info(data);
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
    log.info(`[resize] ${size}`);
  });
}

export function checkUpdate() {
  try {
    const version = `v${appData.version}`;
    log.info(`[version] ${version}`);
    fetch('https://api.github.com/repos/canisminor1990/bilibili-client/releases/latest')
      .then(res => res.text())
      .then(body => {
        const Body = JSON.parse(body);
        const newVersion = Body['tag_name'];
        if (version !== newVersion) {
          dialog.showMessageBox(
            null,
            {
              buttons: ['取消', '去更新'],
              message: `检查到新版本${newVersion}，您正在使用的版本是${version}，是否前往更新？`,
            },
            res => {
              if (res === 1) {
                shell.openExternal('https://github.com/canisminor1990/bilibili-client/releases');
              }
            }
          );
        }
      });
  } catch (e) {}
}
