import classnames from 'classnames/bind';
import { Icon } from 'antd';
import style from './index.scss';

export default ({ className, type, antd, ...other }) => {
  if (!antd) {
    return (
      <div className={classnames.bind(style)('iconfont', `icon-${type}`, className)} {...other} />
    );
  } else {
    return <Icon type={type} className={className} {...other} />;
  }
};
