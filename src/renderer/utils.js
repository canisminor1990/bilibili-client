import { ipcRenderer as ipc, remote } from 'electron';

const UserAgent = {
  desktop: 'bilimini Desktop like Mozilla/233 (Chrome and Safari)',
  mobile: 'bilimini Mobile like (iPhone or Android) whatever AppleWebKit/124.50 Mobile/BI233',
};
const AvPrefix = 'https://www.bilibili.com/video/av';

const Log = msg => {
  console.log(msg);
	if ($isDev) ipc.send('console-msg', msg); // eslint-disable-line
};

const Platform = navigator.platform.indexOf('Mac') > -1 ? 'mac' : 'win';
const Configs = remote.getGlobal('configs');

export { UserAgent, AvPrefix, Log, Platform, Configs };
