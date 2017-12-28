import { AddStyle } from '../utils';

export function load() {
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
		#plist {
			position: fixed !important;
			width: 100%;
			height: 100%;
			overflow-x: hidden;
			overflow-y: auto;
			z-index: 999999 !important;
			top: 0;
			left: 0;
			margin: 0 !important;
			padding: 1rem !important;
			display: flex;
			flex-wrap: wrap;
			justify-content: center;
			background: rgba(0, 0, 0, .8);
		}
		.p-close, .v-part-toggle {
			display: none !important;
		}
		@media (max-width: 480px) {
			.bilibili-player-video-btn-fullscreen,
			.bilibili-player-video-btn-repeat,
			.bilibili-player-video-btn-quality,
			.bilibili-player-video-btn-volume,
			.bilibili-player-danmaku-setting-lite-panel {
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
	window.onload = () => {
		let history;
		const partToggle = document.querySelector('.v-part-toggle');
		if (partToggle) partToggle.click();
		const fullscreen = setInterval(() => {
			let url        = window.location.href;
			let wideScreenButton = document.querySelector('.bilibili-player-iconfont-web-fullscreen');
			if (history !== url && wideScreenButton) {
				wideScreenButton.click();
				history = url;
			}
		}, 50);
		if (url.indexOf('video/av') === -1) clearInterval(fullscreen);
	};
}