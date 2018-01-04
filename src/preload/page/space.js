import { AddStyle, isSpace } from '../utils';

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
    }, timeout);
    if (!isSpace) clearInterval(fixPanel);
  });
}

// Style

export function style() {
  // language=SCSS
  AddStyle(`
		.index__banner__M-space-banner- img,
		.index__exp__M-space-info-,
        .index__call__M-space-info- {
			display: none !important;
		}
		.index__personal__M-space-personal- {
			z-index: 99999 !important;
			opacity: 0;
		}
		.index__face__M-space-info- {
			left: calc(50% - 1.5rem) !important;
			width: 3rem !important;
			height: 3rem !important;
			top: -4rem !important;
			border: 3px solid #fff;
			box-shadow: 0 4px 8px rgba(0, 0, 0, .1);
		}
        .index__big__M-space-info- {
		    left: 9rem !important;
		    top: -1.8rem !important;
		}
		.index__divider__M-space- {
			background: #f25d8e;
			padding-top: 1.3rem !important;
		}
		.index__space__M-space- {
			background: #fff;
		}
		.index__banner__M-space-banner- {
			margin: 0;
			padding: 0;
			background: #f25d8e;
			height: 3rem;
		}
		.index__info__M-space-info- {
			z-index: 999;
		}
		.index__loginField__M-space-banner- {
			top: .5rem !important;
		}
		.index__login__M-space-banner- {
			border: 1px solid #fff
		}
		.index__tabs__M-space-masterpiece-tabs- {
			background: #f8f8f8;
		}
		.index__item__M-space-videoItem- {
			border: none !important;
		}
		.index__tabs__M-space-tabs- {
			border: none !important;
			box-shadow: 0 1px 4px rgba(0, 0, 0, .1);
			cursor: pointer;
		}
		.index__nameField__M-space-info- {
			padding-top: .5rem !important;
		}
		.index__loadMore__M-space-masterpiece-videoBoard-,
		.index__loadMore__M-space-history- {
			background: #f8f8f8 !important;
			cursor: pointer;
		}
		.index__myInfo__M-space-info- {
			cursor: pointer;
		}
	`);
}
