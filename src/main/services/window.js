import { join } from 'path';
import { BrowserWindow } from 'electron';

let count = 0;

export function create(opts) {
  count += 1;
  let win = new BrowserWindow(opts);
  win.on('close', () => {
    count -= 1;
    win = null;
  });
  return win;
}

export function getCount() {
  return count;
}

export function getPath() {
  const path = `file://${join($dirname, '..', 'pages')}/index.html`;
  return path;
}
