import { AddStyle } from './utils';

export default () => {



	// language=SCSS
	AddStyle(`
		.index__topArea__M-commonComponent-topArea-,
		.index__openAppBtn__M-videoPage-openAppBtn-,
		.index__relativeVideo__M-videoPage-relativeVideo-,
		.index__footer__M-videoPage-footer-,
		.index__floatOpenBtn__M-videoPage-floatOpenBtn-,
		.index__relativeTag__M-videoPage-relativeTag- {
			display: none !important;
		}
		.index__videoPage__M-videoPage- {
			padding: 0;
		}
		.index__videoPage__M-videoPage-,
		.index__videoInfo__M-videoPage-videoInfo-,
		.index__videoInfo__M-videoPage-videoInfo- > *,
		.index__upInfo__M-videoPage-upInfo-,
		.index__upInfo__M-videoPage-upInfo- > * {
			background: #fff;
		}
		.index__infoBlock__M-videoPage-infoBlock- {
			border-bottom: none;
		}
	`);
}