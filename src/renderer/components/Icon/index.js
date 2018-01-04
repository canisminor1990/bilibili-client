import classnames from 'classnames/bind';
import { Icon } from 'antd';
import style from './index.scss';

export default ({ className, type, antd, nav, ...other }) => {
  if (!antd) {
    return (
      <div
        className={classnames.bind(style)('iconfont', `icon-${type}`, className, {
          navicon: nav,
        })}
        {...other}
      />
    );
  } else {
    return (
      <Icon
        type={type}
        className={classnames.bind(style)(className, {
          navicon: nav,
        })}
        {...other}
      />
    );
  }
};
