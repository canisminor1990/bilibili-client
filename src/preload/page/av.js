import { AddStyle } from '../utils';
import { ipcRenderer as ipc } from 'electron';

export function style() {
  // language=SCSS
  AddStyle(`
		.bilibili-player-video-btn-widescreen {
			display: none !important;
		}
		.bilibili-player-video-control {
			display: flex !important;
		}
		.bilibili-player-video-progress {
			flex: 1;
			width: auto !important;
		}
		.v-plist {
			display: none;
			background: rgba(0, 0, 0, .8);
			padding: 5.2rem 0 0 0 !important;
			position: relative;
			position: fixed !important;
			z-index: 999999 !important;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
		}
		.v-plist:before {
			content: "分P选择";
			width: 100%;
			height: 5.2rem;
			position: absolute;
			top: 0;
			left: 0;
			color: #fff;
			font-size: 1.3rem;
			display: flex;
			align-items: center;
			justify-content: center;
			border-bottom: 1px solid rgba(255, 255, 255, .2);
		}
		#plist {
			width: 100%;
			height: calc(100% - 5.2rem);
			overflow-x: hidden;
			overflow-y: auto;
			margin: 0 !important;
			padding: 0 !important;
			display: flex;
			flex-direction: column;
		}
		#plist > a, .curPage {
			display: block;
			margin: 0 !important;
			width: auto !important;
			flex: 1 !important;
			height: 3rem !important;
			min-height: 3rem !important;
			padding: 0 1rem !important;
			display: flex !important;
			align-items: center;
			border: none;
			border-radius: 0 !important;
			border-color: rgba(255, 255, 255, .2) !important;
			border-bottom: 1px solid rgba(255, 255, 255, .2);
			line-height: 1 !important;
		}
		#plist > a {
			background: transparent !important;
			color: #fff !important;
		}
		.curPage {
			background: #f25d8e !important;
			cursor: pointer;
		}
		.p-close, .v-part-toggle {
			display: none !important;
		}
		.bilibili-player-danmaku-setting-lite-panel {
			display: none !important;
		}
		#selectPart {
			width: 28px;
			height: 28px;
			display: flex;
			align-items: center;
			justify-content: center;
			color: #99a2aa;
			font-weight: 800;
			cursor: pointer;
		}
		#selectPart:hover{
			background-color: #f4f5f7;
			color: #6d757a;
		}
		@media (max-width: 480px) {
			.bilibili-player-video-btn-fullscreen,
			.bilibili-player-video-btn-repeat,
			.bilibili-player-video-btn-quality,
			.bilibili-player-video-btn-volume {
				display: none !important;
			}
			.bilibili-player-video-control {
				position: fixed !important;
				bottom: 0 !important;
				left: 0 !important;
				z-index: 999 !important;
				opacity: 0 !important;
				transition: .3s ease-in-out;
			}
			.bilibili-player-video-control:hover {
				opacity: 1 !important;
			}
		}
	`);
}

export function init() {
  window.onload = () => {
    let history;
    const partToggle = document.querySelector('.v-part-toggle');
    if (partToggle) partToggle.click();
    const fullscreen = setInterval(() => {
      const url = window.location.href;
      const wideScreenButton = document.querySelector('.bilibili-player-iconfont-web-fullscreen');
      if (history !== url && wideScreenButton) {
        SelectPart();
        wideScreenButton.click();
        history = url;
      }
    }, 50);
    if (url.indexOf('video/av') === -1) clearInterval(fullscreen);
  };
}

const SelectPart = () => {
  if ($('#selectPart').length === 0) {
    const selectPart = `
			<div class="bilibili-player-iconfont" id="selectPart" data-text="分P">P</div>
		`;
    $('.bilibili-player-video-btn-danmaku').after(selectPart);
  }
  $('#plist > a').bind('click', () => $('.v-plist').fadeOut());
  $('#plist > .curPage').bind('click', () => $('.v-plist').fadeOut());
  $('#selectPart').bind('click', () => $('.v-plist').fadeIn());
};
