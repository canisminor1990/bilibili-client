import { Icon } from 'antd';
import classnames from 'classnames/bind';
import style from './index.scss';

export default ({ className, mini, type, disable, ...other }) => {
  const iconClass = classnames.bind(style)(className, {
    button: !mini,
    miniButton: mini,
    disable: disable,
  });
  return (
    <div className={iconClass} {...other}>
      <Icon className={style.icon} type={type} />
    </div>
  );
};
