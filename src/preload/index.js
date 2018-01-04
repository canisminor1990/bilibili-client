import { ipcRenderer as ipc } from 'electron';
import * as global from './pages/global';
import * as home from './pages/home';
import * as av from './pages/av';
import * as bangumi from './pages/bangumi';
import * as dynamic from './pages/dynamic';
import * as space from './pages/space';
import * as login from './pages/login';
import { is } from './utils';

window.addEventListener('DOMContentLoaded', () => {
  const url = window.location.href;
  global.style();
  // 首页、分区首页
  if (is.Home(url)) {
    home.style();
    console.log('[preload] Home Load');
  }

  // 我的
  if (is.Space(url)) {
    space.style();
    space.init();
    console.log('[preload] Space Load');
  }

  // 动态
  if (is.Dynamic(url)) {
    dynamic.style();
    dynamic.init();
    console.log('[preload] Dynamic Load');
  }

  // 登陆

  if (is.Login(url)) {
    login.style();
    console.log('[preload] Login Load');
  }

  // 视频页
  if (is.Av(url)) {
    av.style();
    av.init();
    console.log('[preload] Av Load');
  }

  // 番剧页
  if (is.Bangumi(url)) {
    bangumi.style();
    bangumi.init();
    console.log('[preload] Bangumi Load');
  }

  // 缩放控制
  if (!is.Av(url) && !is.Bangumi(url)) {
    ipc.send('video-off');
  } else {
    ipc.send('video-on');
    window.addEventListener('resize', () => ipc.send('resize'));
  }
});
