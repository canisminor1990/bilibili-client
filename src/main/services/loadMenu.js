import { Menu } from 'electron';
import { Log } from '../utils';

export default win => {
  const Content = [
    {
      label: 'Bilibili',
      submenu: [
        { role: 'hide' },
        { role: 'hideothers' },
        { role: 'unhide' },
        { type: 'separator' },
        { role: 'quit' },
      ],
    },
    {
      label: 'Edit',
      submenu: [{ role: 'copy' }, { role: 'paste' }, { role: 'delete' }, { role: 'selectall' }],
    },
    {
      label: 'View',
      submenu: [
        { role: 'reload' },
        { type: 'separator' },
        {
          label: '🛠 DevTool - Main Window',
          accelerator: 'CmdOrCtrl+1',
          click() {
            win.webContents.openDevTools();
          },
        },
        {
          label: '🛠 DevTool - Webview',
          accelerator: 'CmdOrCtrl+2',
          click() {
            win.webContents.send('webview-devtool');
          },
        },
      ],
    },
    {
      role: 'window',
      label: 'Window',
      submenu: [{ role: 'minimize' }, { role: 'close' }],
    },
  ];
  const menu = Menu.buildFromTemplate(Content);
  Menu.setApplicationMenu(menu);
  Log('[app][menu] load ');
};
