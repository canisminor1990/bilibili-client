import { Log } from '../utils';
import { create, getPath } from './window';
import loadMenu from './loadMenu';
import loadIpc from './loadIpc';
import checkUpdate from './checkUpdate';
import Configs from '../configs';

export function init() {
  Log('[app][application] load');
  const opt = {
    name: 'Bilibili',
    width: Configs.get('windowsSize')[0],
    height: Configs.get('windowsSize')[1],
    transparent: Configs.get('transparent'),
    frame: false,
    resizable: false,
    toolbar: false,
    backgroundColor: Configs.get('transparent') ? '#00000000' : '#ffffff',
  };

  const win = create(opt);
  win.loadURL(getPath());
  win.setAlwaysOnTop(true, 'modal-panel');
  checkUpdate();
  loadMenu(win);
  loadIpc(win);
}
