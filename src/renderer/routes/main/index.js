import { connect } from 'dva';
import { Component } from 'react';
import { ipcRenderer as ipc } from 'electron';
import { Loading, Webview, Button, Icon } from '../../components/index';
import { userAgent, videoUrlPrefix, bangumiUrl } from './utils';
import style from './index.scss';

let wv;

const State = state => ({
  loading: state.loading.global ? false : state.wvLoading.loading,
  history: state.history,
});

class Main extends Component {
  state = {
    key: 0,
  };

  componentWillMount() {
    window.addEventListener('DOMContentLoaded', () => {
      wv = document.getElementById('wv');
      // console转发
      wv.addEventListener('console-message', content => console.log(content.message));
      // 使用history负责跳转
      wv.addEventListener('will-navigate', e => {
        this.history.go(e.url);
      });
      // 载入完成
      wv.addEventListener('did-finish-load', () => {
        // console.log(wv.getURL());
        this.loading(false);
      });
    });
  }

  render() {
    const $ = this.props;

    const Exit = <Button type="close-circle" onClick={this.exit} />;

    const GoBack = (
      <Button
        type="left-circle"
        onClick={() => this.history.goBack()}
        disable={!this.history.canGoBack()}
      />
    );

    const GoForward = (
      <Button
        type="right-circle"
        onClick={() => this.history.goForward()}
        disable={!this.history.canGoForward()}
      />
    );

    const Logo = (
      <Icon
        className={style.logo}
        type="logo"
        onClick={() => this.history.go('https://m.bilibili.com/index.html')}
      />
    );

    const Space = (
      <Icon
        className={style.navicon}
        type="user"
        onClick={() => this.history.go('https://m.bilibili.com/space')}
        antd
      />
    );

    const Search = (
      <Icon
        className={style.navicon}
        type="search"
        onClick={() => this.history.go('https://m.bilibili.com/search.html')}
        antd
      />
    );

    return (
      <div className={style.window}>
        <div className={style.navbar} key={this.state.key}>
          <div className={style.headerBar}>
            {Exit}
            {GoBack}
            {GoForward}
          </div>
          <div className={style.subBar}>
            <div className={style.left}>{Space}</div>
            {Logo}
            <div className={style.right}>{Search}</div>
          </div>
        </div>
        <div className={style.view}>
          <Loading loading={$.loading} />
          <Webview loading={$.loading} />
        </div>
      </div>
    );
  }

  loading = bool => {
    this.props.dispatch({ type: 'wvLoading/update', payload: { loading: bool } });
  };

  exit = () => ipc.send('close-main-window');

  history = {
    go: (url, noNewHistory) => {
      let match, goUrl;
      if ((match = /video\/av(\d+(?:\/index_\d+\.html)?(?:\/#page=\d+)?)/.exec(url))) {
        goUrl = videoUrlPrefix + match[1];
        wv.loadURL(goUrl, { userAgent: userAgent.desktop });
      } else {
        goUrl = url;
        wv.loadURL(goUrl, { userAgent: userAgent.mobile });
      }
      !noNewHistory && this.history.add(goUrl);
      console.log('[history]', 'go', goUrl);
      this.loading(true);
    },
    goBack: () => {
      if (!this.history.canGoBack()) return false;
      console.log('[history]', 'goBack');
      this.history.go(this.props.history.stack[this.history.pos(-1)], true);
    },
    goForward: () => {
      if (!this.history.canGoForward()) return false;
      console.log('[history]', 'goForward');
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

export default connect(State)(Main);
