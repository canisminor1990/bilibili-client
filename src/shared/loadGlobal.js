import { AddStyle } from './utils';

export default () => {
	// language=SCSS
	AddStyle(`
		html,body {
			-webkit-overflow-scrolling: touch;
			overflow-x: hidden;
			background: #fff;
		}
		body, h1, h2, h3, h4, h5, h6, p {
			font-family: system, -apple-system, \\.SFNSDisplay-Regular, HelveticaNeue, LucidaGrande, PingFang SC, Hiragino Sans GB, Microsoft YaHei, sans-serif !important;
		}
		::-webkit-scrollbar {
			background: rgba(#ccc, 0.1);
			height: 0;
			width: 0;
		}
		::-webkit-scrollbar-track {
			background: transparent;
			border-radius: 0;
			box-shadow: none;
		}
		::-webkit-scrollbar-thumb {
			background: rgba(#ccc, 0.5);
			border-radius: 0;
			box-shadow: none;
			&:hover {
				background: #fb7299;
			}
		}
		.index__banner__M-home-slider-,
		.index__openBtn__M-commonComponent-openBtn-,
		.index__footer__M-space-footer-,
		.index__law__M-home-,
		.index__law__M-partition-,
		#toTop,
		#floatBtn,
		#openAppBtn {
			display: none !important;
		}
		.index__topArea__M-commonComponent-topArea- {
			background: #fb7299;
		}
		.index__icon__M-commonComponent-topArea- {
			fill: #fff !important;
		}
		.index__logo__M-commonComponent-topArea- {
			display: none !important;
		}
		.index__mySpace__M-commonComponent-topArea- {
			position: absolute !important;
			left: .5rem !important;
			border:1px solid #fff;
		}
		.index__searchIcon__M-commonComponent-topArea-{
			position: absolute !important;
			right: .5rem !important;
		}
	`);
}