import { ipcRenderer as ipc } from 'electron';
import * as global from './page/global';
import * as home from './page/home';
import * as av from './page/av';
import * as bangumi from './page/bangumi';
import * as space from './page/space';
import { isHome, isAv, isBangumi, isSpace } from './utils';

window.addEventListener('DOMContentLoaded', () => {
  const url = window.location.href;
  global.style();
  // 首页、分区首页
  if (isHome(url)) {
    home.style();
    console.log('[preload] Home Load');
  }

  // 我的
  if (isSpace(url)) {
    space.style();
    space.init();
    console.log('[preload] Space Load');
  }

  // 视频页
  if (isAv(url)) {
    av.style();
    av.init();
    console.log('[preload] Av Load');
  }

  // 番剧页
  if (isBangumi(url)) {
    bangumi.style();
    bangumi.init();
    console.log('[preload] Bangumi Load');
  }

  // 缩放控制
  if (!isAv(url) && !isBangumi(url)) {
    ipc.send('video-off');
  } else {
    ipc.send('video-on');
    window.addEventListener('resize', () => ipc.send('resize'));
  }
});
