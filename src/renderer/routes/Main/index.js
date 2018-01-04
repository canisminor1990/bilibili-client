import { connect } from 'dva';
import { Loading, Webview, Button, Icon, Navbar, Menu } from '../../components';
import classnames from 'classnames/bind';
import Setting from '../Setting';
import History from './history';
import style from './index.scss';

const State = state => ({
  loading: state.loading.global ? false : state.trigger.loading,
  history: state.history,
});

class Main extends History {
  render() {
    const $ = this.props;
    const H = this.history;
    const S = this.state;

    const Exit = <Button key="Exit" type="close-circle" onClick={this.exit} />;

    const GoBack = (
      <Button key="GoBack" onClick={() => H.goBack()} disable={!H.canGoBack()} type="left-circle" />
    );

    const GoForward = (
      <Button
        key="GoForward"
        onClick={() => H.goForward()}
        disable={!H.canGoForward()}
        type="right-circle"
      />
    );

    const Logo = (
      <Icon
        key="Logo"
        onClick={() => H.go('https://m.bilibili.com/index.html')}
        className={style.logo}
        type="logo"
      />
    );

    const Space = (
      <Icon key="Space" onClick={() => H.go('https://m.bilibili.com/space')} type="user" antd nav />
    );

    const Dynamic = (
      <Icon
        key="Dynamic"
        onClick={() => H.go('https://www.bilibili.com/account/dynamic')}
        type="heart-o"
        antd
        nav
      />
    );

    const Back = (
      <Icon key="Back" onClick={() => this.setState({ inSetting: false })} type="left" antd nav />
    );

    const MenuContent = [
      ['search', '搜索', () => H.go('https://m.bilibili.com/search.html')],
      ['setting', '设置', () => this.setState({ inSetting: true })],
    ];

    const More = <Menu key="More" type="appstore-o" content={MenuContent} />;

    return [
      <Navbar
        key={S.key}
        inVideo={S.inVideo}
        header={S.inSetting ? Exit : [Exit, GoBack, GoForward]}
        left={S.inSetting ? Back : Space}
        center={S.inSetting ? '设置' : Logo}
        right={S.inSetting ? null : [Dynamic, More]}
      />,
      <div key="webview" className={classnames.bind(style)('view', { viewAnimation: S.inVideo })}>
        {S.inSetting ? <Setting /> : null}
        <Loading loading={$.loading} />
        <Webview loading={$.loading} />
      </div>,
    ];
  }
}

export default connect(State)(Main);
