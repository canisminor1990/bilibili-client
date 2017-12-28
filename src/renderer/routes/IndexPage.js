import {} from 'react'
import { Loading, Webview } from '../components';
import style from './index.scss';

const userAgent      = {
	desktop: 'bilimini Desktop like Mozilla/233 (Chrome and Safari)',
	mobile : 'bilimini Mobile like (iPhone or Android) whatever AppleWebKit/124.50 Mobile/BI233'
};
const videoUrlPrefix = 'http://www.bilibili.com/video/av';
const bangumiUrl     = (aid, pid) => `http://bangumi.bilibili.com/anime/${aid}/play#${pid}`;

const go = (url) => {
	const wvUrl = url;
	let m;
	if (m = /video\/av(\d+(?:\/index_\d+\.html)?(?:\/#page=\d+)?)/.exec(wvUrl)) {
		wv.loadURL(videoUrlPrefix + m[1], {userAgent: userAgent.desktop});
	} else {
		wv.loadURL(wvUrl, {userAgent: userAgent.mobile});
	}
};

export default () => {
	window.addEventListener('DOMContentLoaded', () => {
		const wv = document.getElementById('wv');
		// 当用户点到视频播放页时跳到桌面版页面，桌面版的h5播放器弹幕效果清晰一点
		wv.addEventListener('will-navigate', (e) => {
			console.log(`触发will-navigate事件，目标${e.url}`);
			// 当用户点到视频播放页时跳到桌面版页面，桌面版的h5播放器弹幕效果清晰一点
			go(e.url);
		});

		wv.addEventListener('console-message', (content) => {
			console.log(content.message);
		});
		wv.addEventListener('did-finish-load', () => {
			console.log(wv.getURL());
		});
	});
	return (
		<div className={style.view}>
			<Loading loading={false}/>
			<Webview/>
		</div>
	);

}
