import { ipcRenderer as ipc } from 'electron';
import * as global from './page/global';
import * as home from './page/home';
import * as av from './page/av';
import * as space from './page/space';

window.addEventListener('DOMContentLoaded', () => {
  global.load();
  // 首页、分区首页
  if (
    /bilibili\.com\/index\.html$/.test(window.location.href) ||
    /\/channel\/\d+\.html$/.test(window.location.href)
  ) {
    home.style();
  }

  // 视频页
  if (
    window.location.href.indexOf('video/av') > -1 ||
    window.location.href.indexOf('html5player.html') > -1
  ) {
    av.style();
    av.init();
    ipc.send('video-on');
    window.addEventListener('resize', () => ipc.send('resize'));
  } else {
    ipc.send('video-off');
  }

  // 我的
  if (window.location.href.indexOf('bilibili.com/space') > -1) {
    space.style();
  }
});
