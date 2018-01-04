import { AddStyle, is } from '../../utils';
import styles from './index.scss';
export function style() {
  AddStyle(styles);
}

export function init() {
  $(() => {
    let history;
    let count = 0;
    let url = window.location.href;
    const timeout = 50;
    console.log(1);
    const fixClick = setInterval(() => {
      url = window.location.href;
      if (history !== url || count < 50) {
        $('a').bind('click', function() {
          window.location.href = this.href;
        });
        count++;
        history = url;
      }
      if (!is.Dynamic(url)) clearInterval(fixClick);
    }, timeout);
  });
}
