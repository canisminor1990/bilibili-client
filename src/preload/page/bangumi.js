import { AddStyle, isBangumi } from '../utils';
import { playerStyle } from './av';

export function style() {
  // language=SCSS
  AddStyle(`
		.bangumi-list-wrapper {
			display: none;
			position: fixed;
			width: calc(100% - 3rem);
			height: 100%;
			left: 0;
			top: 0;
			background: rgba(255, 255, 255, .98);
			z-index: 999999;
			margin: 0 !important;
			padding: 1.5rem;
			padding-top: 80px;
		}
		.bangumi-list-wrapper:before {
			padding: 0;
			content: "分P选择";
			width: 100%;
			height: 64px;
			position: fixed;
			top: 0;
			left: 0;
			color: #555;
			font-size: 1rem;
			display: flex;
			align-items: center;
			justify-content: center;
			box-shadow: 0 2px 8px rgba(0, 0, 0, .15);
		}

	`);
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
    }, timeout);
    if (!isBangumi(url)) clearInterval(fullscreen);
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
