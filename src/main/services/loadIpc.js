import { Log } from '../utils';
import Configs from '../configs';
import { ipcMain as ipc, shell } from 'electron';

export default win => {
  // 设置
  ipc.on('config-set', (event, data) => {
    Configs.set(data);
  });

  // console 转发
  ipc.on('console-msg', (event, data) => {
    Log(`[webview]${data}`);
  });
  // 浏览器打开外链
  ipc.on('link', (event, data) => {
    shell.openExternal(data);
  });
  // 关闭按钮处理
  ipc.on('close-main-window', () => {
    win.minimize();
  });
  // 界面尺寸
  ipc.on('video-on', () => {
    let playerSize = Configs.get('playerSize');
    win.setSize(playerSize[0], playerSize[1], true);
    win.setResizable(true);
  });
  ipc.on('video-off', () => {
    let windowsSize = Configs.get('windowsSize');
    win.setSize(windowsSize[0], windowsSize[1], true);
    win.setResizable(false);
  });
  ipc.on('resize', () => {
    let playerSize = Configs.get('playerSize');
    playerSize = win.getSize();
    Log('[app][resize]', playerSize);
  });
  Log('[app][ipc] load');
};
