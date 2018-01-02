import { AddStyle, isAv } from '../utils';

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
    }, timeout);
    if (!isAv(url)) clearInterval(fullscreen);
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
  AddStyle(`
	${plistStyle}
	${playerStyle}
	`);
}

// language=SCSS
const plistStyle = `
	.v-plist {
		display: none;
		background: rgba(255, 255, 255, .98);
		padding: 5.1rem 0 0 0 !important;
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
		height: 5.1rem;
		position: absolute;
		top: 0;
		left: 0;
		color: #555;
		font-size: 1rem;
		display: flex;
		align-items: center;
		justify-content: center;
		box-shadow: 0 2px 8px rgba(0, 0, 0, .15);
	}
	#plist {
		width: 100%;
		height: calc(100% - 5.1rem);
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
		border-color: rgba(0, 0, 0, .08) !important;
		border-bottom: 1px solid rgba(0, 0, 0, .08);
		line-height: 1 !important;
	}

	.curPage {
		cursor: pointer;
	}
	.p-close, .v-part-toggle {
		display: none !important;
	}
`;
// language=SCSS
const playerStyle = `
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
	#selectPart:hover {
		background-color: #f4f5f7;
		color: #6d757a;
	}
	.bilibili-player-video-btn-fullscreen,
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
	.bilibili-player-danmaku-setting-lite-panel {
		display: none !important;
	}
	@media (max-width: 480px) {
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
`;

export { playerStyle };
