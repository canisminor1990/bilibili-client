import { ipcRenderer as ipc } from 'electron';
import * as global from './page/global';
import * as home from './page/home';
import * as av from './page/av';
import * as bangumi from './page/bangumi';
import * as space from './page/space';

window.addEventListener('DOMContentLoaded', () => {
  const url = window.location.href;
  global.load();
  // 首页、分区首页
  if (/bilibili\.com\/index\.html$/.test(url) || /\/channel\/\d+\.html$/.test(url)) {
    home.style();
  }

  // 视频页
  if (url.indexOf('video/av') > -1 || url.indexOf('html5player.html') > -1) {
    av.style();
    av.init();
    ipc.send('video-on');
    window.addEventListener('resize', () => ipc.send('resize'));
  }

  if (url.indexOf('bangumi/play') > -1) {
    console.log(1);
    bangumi.style();
    bangumi.init();
    ipc.send('video-on');
    window.addEventListener('resize', () => ipc.send('resize'));
  }

  if (
    url.indexOf('video/av') === -1 &&
    url.indexOf('html5player.html') === -1 &&
    url.indexOf('bangumi/play') === -1
  ) {
    ipc.send('video-off');
  }

  // 我的
  if (url.indexOf('bilibili.com/space') > -1) {
    space.style();
  }
});
