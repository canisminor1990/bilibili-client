import classnames from 'classnames/bind';
import { join } from 'path';
import { isDev, UserAgent } from '../../utils';
import style from './index.scss';

export default ({ loading }) => {
  const devPath = `file://${join($dirname, 'app', 'dist', 'preload.js')}`; // eslint-disable-line
  const pubPath = '../dist/preload.js';
  return (
    <webview
      id="wv"
      className={classnames.bind(style)('webview', { loading: loading })}
      src="https://m.bilibili.com/index.html"
      useragent={UserAgent.mobile}
      preload={isDev ? devPath : pubPath}
      disablewebsecurity="true"
    />
  );
};
