import { AddStyle, is } from '../../utils';
import styles from './index.scss';
import playerStyle from '../../style/player.scss';

export function style() {
  AddStyle(styles);
}

export function init() {
  $(() => {
    let history;
    let url = window.location.href;
    const timeout = 50;
    const fullscreen = setInterval(() => {
      url = window.location.href;
      let iframe = $('iframe.bilibiliHtml5Player');
      let wideScreenButton = $('.bilibili-player-iconfont-web-fullscreen');
      if (history !== url) {
        if (wideScreenButton.length > 0) {
          // h5player
          wideScreenButton.click();
          SelectPart();
          AddStyle(playerStyle);
          history = url;
          $('.bangumi-list-wrapper').fadeOut();
          console.log('[bangumi-h5] fullscreen');
        } else if (iframe.length > 0) {
          // iframe
          let playerIframe = iframe[0].contentWindow.document;
          let iframeButton = $('.bilibili-player-iconfont-web-fullscreen', playerIframe);
          if (iframeButton.length > 0) {
            iframeButton.click();
            SelectPart(playerIframe);
            AddStyle(playerStyle, playerIframe);
            history = url;
            $('.bangumi-list-wrapper').fadeOut();
            console.log('[bangumi-iframe] fullscreen');
          }
        }
      }
      if (!is.Bangumi(url)) clearInterval(fullscreen);
    }, timeout);
  });
}

const SelectPart = playerIframe => {
  const selectPart = `
			<div class="bilibili-player-iconfont" id="selectPart" data-text="分P">P</div>
		`;
  if (playerIframe) {
    if ($('#selectPart', playerIframe).length === 0) {
      $('.bilibili-player-video-btn-quality', playerIframe).after(selectPart);
    }
    $('#selectPart', playerIframe).bind('click', () => $('.bangumi-list-wrapper').fadeIn());
  } else {
    if ($('#selectPart').length === 0) {
      $('.bilibili-player-video-btn-quality').after(selectPart);
    }
    $('#selectPart').bind('click', () => $('.bangumi-list-wrapper').fadeIn());
  }
  $('.episode-item.on').bind('click', () => $('.bangumi-list-wrapper').fadeOut());
};
