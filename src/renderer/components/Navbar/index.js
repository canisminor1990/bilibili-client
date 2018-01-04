import classnames from 'classnames/bind';
import { Platform } from '../../utils';
import style from './index.scss';

export default ({ inVideo, header, left, center, right }) => {
  const NavbarClass = classnames.bind(style)('navbar', {
    navbarAnimation: inVideo,
    macDrag: Platform() === 'mac',
  });
  return (
    <div className={NavbarClass}>
      <div className={style.navbarView}>
        <div className={style.headerBar}>
          {header}
          {Platform() === 'win' ? <div className={style.drag} /> : null}
        </div>
        <div className={style.subBar}>
          <div className={style.left}>{left}</div>
          {center}
          <div className={style.right}>{right}</div>
        </div>
      </div>
    </div>
  );
};
