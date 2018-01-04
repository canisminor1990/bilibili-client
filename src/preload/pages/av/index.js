import { AddStyle, is } from '../../utils';
import styles from './index.scss';

export function init() {
  $(() => {
    let history;
    let url = window.location.href;
    const timeout = 50;
    const fullscreen = setInterval(() => {
      url = window.location.href;
      const wideScreenButton = $('.bilibili-player-iconfont-web-fullscreen');
      if (history !== url && wideScreenButton.length > 0) {
        if ($('.curPage').length > 0) SelectPart();
        wideScreenButton.click();
        history = url;
        $('.v-plist').fadeOut();
        console.log('[av] fullscreen');
      }
      if (!is.Av(url)) clearInterval(fullscreen);
    }, timeout);
  });
}

const SelectPart = () => {
  const partToggle = $('.v-part-toggle');
  if (partToggle.length > 0) partToggle.click();

  if ($('#selectPart').length === 0) {
    const selectPart = `
			<div class="bilibili-player-iconfont" id="selectPart" data-text="分P">P</div>
		`;
    $('.bilibili-player-video-btn-quality').after(selectPart);
  }
  $('.curPage').bind('click', () => $('.v-plist').fadeOut());
  $('#selectPart').bind('click', () => $('.v-plist').fadeIn());
};

// Style

export function style() {
  AddStyle(styles);
}
