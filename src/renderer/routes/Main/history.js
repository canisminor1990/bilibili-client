import { Component } from 'react';
import { ipcRenderer as ipc } from 'electron';
import { Log, UserAgent, AvPrefix } from '../../utils';

let wv;

class History extends Component {
  state = {
    key: 0,
    inVideo: false,
    inSetting: false,
  };

  componentWillMount() {
    window.addEventListener('DOMContentLoaded', () => {
      wv = document.getElementById('wv');
      // console转发
      wv.addEventListener('console-message', content => Log(content.message));
      // 使用history负责跳转
      wv.addEventListener('will-navigate', e => {
        this.history.go(e.url);
      });
      // 载入完成
      wv.addEventListener('did-finish-load', () => {
        this.loading(false);
      });
      // Devtool
      ipc.on('webview-devtool', () => {
        wv.openDevTools();
      });
    });
  }

  exit = () => ipc.send('close-main-window');

  loading = bool => {
    this.props.dispatch({ type: 'trigger/update', payload: { loading: bool } });
  };

  history = {
    go: (url, noNewHistory) => {
      const match = /video\/av(\d+(?:\/index_\d+\.html)?(?:\/#page=\d+)?)/.exec(url);
      let goUrl;
      if (match) {
        goUrl = AvPrefix + match[1];
        wv.loadURL(goUrl, { userAgent: UserAgent.desktop });
        this.setState({ inVideo: true });
      } else {
        goUrl = url;
        wv.loadURL(goUrl, { userAgent: UserAgent.mobile });
        this.setState({ inVideo: false });
      }
      !noNewHistory && this.history.add(goUrl);
      Log(`[history] go ${goUrl}`);
      this.loading(true);
    },
    goBack: () => {
      if (!this.history.canGoBack()) return false;
      Log('[history] goBack');
      this.history.go(this.props.history.stack[this.history.pos(-1)], true);
    },
    goForward: () => {
      if (!this.history.canGoForward()) return false;
      Log('[history] goForward');
      this.history.go(this.props.history.stack[this.history.pos(1)], true);
    },
    add: url => this.props.dispatch({ type: 'history/add', payload: url }),
    pos: num => {
      const newPos = this.props.history.pos + num;
      this.props.dispatch({ type: 'history/pos', payload: newPos });
      this.setState({ key: newPos });
      return newPos;
    },
    canGoBack: () => this.props.history.pos > 0,
    canGoForward: () => this.props.history.pos + 1 < this.props.history.stack.length,
  };
}

export default History;
