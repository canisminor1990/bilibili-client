import { AddStyle } from '../utils';

export function load() {
	// language=SCSS
	AddStyle(`
		.index__banner__M-space-banner- img,
		.index__exp__M-space-info- {
			display: none !important;
		}
		.index__face__M-space-info- {
			left: calc(50% - 1.5rem) !important;
			width: 3rem !important;
			height: 3rem !important;
			top: -4rem !important;
			border:3px solid #fff;
			box-shadow: 0 4px 8px rgba(0,0,0,.1);
		}
		.index__space__M-space- {
			background: #fff;
		}
		.index__banner__M-space-banner- {
			background: #fb7299;
			height: 3rem;
		}
		.index__info__M-space-info-{
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
	`);
}