import { ipcRenderer as ipc } from 'electron';

const UserAgent = {
  desktop: 'bilimini Desktop like Mozilla/233 (Chrome and Safari)',
  mobile: 'bilimini Mobile like (iPhone or Android) whatever AppleWebKit/124.50 Mobile/BI233',
};
const VideoUrlPrefix = 'https://www.bilibili.com/video/av';
const BangumiUrl = (aid, pid) => `http://bangumi.bilibili.com/anime/${aid}/play#${pid}`;

const Log = msg => {
  console.log(msg);
  ipc.send('console-msg', msg);
};

export default { UserAgent, VideoUrlPrefix, BangumiUrl, Log };
