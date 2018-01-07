import classnames from 'classnames/bind';
import { Component } from 'react';
import { Platform } from '../../utils';
import style from './index.scss';

export default class extends Component {
  render() {
    const { inVideo, header, left, center, right } = this.props;

    const NavbarClass = classnames.bind(style)('navbar', {
      inVideo: inVideo,
      macDragFix: Platform === 'mac',
    });

    return (
      <div className={NavbarClass}>
        <div className={style.headerBar}>
          {header}
          <div className={style.drabar} />
        </div>
        <div className={style.subBar}>
          <div className={style.left}>{left}</div>
          {center}
          <div className={style.right}>{right}</div>
        </div>
      </div>
    );
  }
}
