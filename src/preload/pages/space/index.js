import { AddStyle, is } from '../../utils';
import styles from './index.scss';
export function init() {
  $(() => {
    let history;
    let url = window.location.href;
    const timeout = 50;
    const fixPanel = setInterval(() => {
      url = window.location.href;
      const Panel = $('.index__personal__M-space-personal-');
      if (history !== url && Panel.length > 0) {
        $('.index__myInfo__M-space-info-').bind('click', () => Panel.css('opacity', '1'));
        history = url;
        console.log('[panel] fix');
      }
      if (!is.Space) clearInterval(fixPanel);
    }, timeout);
  });
}

// Style

export function style() {
  AddStyle(styles);
}
