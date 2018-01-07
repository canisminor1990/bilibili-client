import { ipcRenderer as ipc } from 'electron';

const UserAgent = {
  desktop: 'bilimini Desktop like Mozilla/233 (Chrome and Safari)',
  mobile: 'bilimini Mobile like (iPhone or Android) whatever AppleWebKit/124.50 Mobile/BI233',
};
const AvPrefix = 'https://www.bilibili.com/video/av';

const Log = msg => {
  console.log(msg);
  if (isDev) ipc.send('console-msg', msg);
};

const Platform = navigator.platform.indexOf('Mac') > -1 ? 'mac' : 'win';

const isDev = process.env.NODE_ENV === 'development';

export { UserAgent, AvPrefix, Log, Platform, isDev };
