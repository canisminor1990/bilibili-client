import { create, getPath } from './window';
import log from 'electron-log';

export function init() {
	log.info('application：init');
  const win = create({width: 375, height: 650});
  win.loadURL(getPath());
	win.setAlwaysOnTop(true);
}
