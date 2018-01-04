import { Log } from '../utils';
import { create, getPath } from './window';
import loadMenu from './loadMenu';
import loadIpc from './loadIpc';
import checkUpdate from './checkUpdate';

export function init() {
  Log('[app][application] load');
  const win = create({
    width: 375,
    height: 650,
    frame: false,
    resizable: false,
  });
  win.loadURL(getPath());
  win.setAlwaysOnTop(true);
  checkUpdate();
  loadMenu(win);
  loadIpc(win);
}
