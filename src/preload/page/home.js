import { Hide, AddStyle } from '../utils';

export function load() {
	// language=SCSS
	AddStyle(`
		.index__home__M-home-,
		.index__partition__M-partition-,
		.index__partBox__M-partition-secondZone- {
			background: #fff;
		}
		.index__line__M-partition- {
			border-bottom: none !important;
		}
		.index__show__M-home-zoneAll-,
		.index__show__M-home-zoneAll- {
			box-shadow: 0 2px 8px rgba(0, 0, 0, .15);
		}
		.index__content__M-home-recommend-,
		.index__content__M-home-different-,
		.index__content__M-home-last-,
		.index__content__M-partition-recommend-,
		.index__content__M-partition-different-,
		.index__latest__M-partition-latest- {
			display: flex !important;
			flex-wrap: wrap !important;
		}
		.index__title__M-home-different-,
		.index__title__M-partition-different- {
			margin-top: 1rem;
		}
		.index__item__M-commonComponent-Item- {
			padding: 0;
			background: #fff;
			overflow: hidden;
			border-radius: 2px;
			box-shadow: 0 0 1px 1px #f8f8f8;
			margin: .3rem .2rem;
			min-width: 40%;
			flex: 1;
			transition-duration: .5s;
		}
		.index__item__M-commonComponent-Item-:hover {
			box-shadow: 0 4px 16px rgba(0, 0, 0, .15);
		}
		.index__item__M-commonComponent-Item- .index__imgContainer__M-commonComponent-Item- {
			margin: 0;
			width: 100%;
			border-radius: 0;
		}
		.index__info__M-commonComponent-Item- {
			display: none !important;
		}
		.index__item__M-commonComponent-Item- .index__title__M-commonComponent-Item- {
			margin: 0;
			padding: 0;
			height: auto;
			position: relative;
			display: flex;
		}
		.index__item__M-commonComponent-Item- .index__title__M-commonComponent-Item- p {
			overflow: hidden;
			padding: .5rem;
			margin: 0;
			flex: 1;
			display: block;
			white-space: nowrap;
			text-overflow: ellipsis;
		}
	`);
}