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
      const iframe = $('iframe.bilibiliHtml5Player');
      if (history !== url && iframe.length > 0) {
        const playerIframe = iframe[0].contentWindow.document;
        const wideScreenButton = $('.bilibili-player-iconfont-web-fullscreen', playerIframe);
        if (wideScreenButton.length > 0) {
          SelectPart(playerIframe);
          AddStyle(playerStyle, playerIframe);
          wideScreenButton.click();
          history = url;
          $('.bangumi-list-wrapper').fadeOut();
          console.log('[bangumi] fullscreen');
        }
      }
    }, timeout);
    if (!isBangumi(url)) clearInterval(fullscreen);
  });
}

const SelectPart = playerIframe => {
  if ($('#selectPart', playerIframe).length === 0) {
    const selectPart = `
			<div class="bilibili-player-iconfont" id="selectPart" data-text="分P">P</div>
		`;
    $('.bilibili-player-video-btn-quality', playerIframe).after(selectPart);
  }
  $('.episode-item.on').bind('click', () => $('.bangumi-list-wrapper').fadeOut());
  $('#selectPart', playerIframe).bind('click', () => $('.bangumi-list-wrapper').fadeIn());
};
