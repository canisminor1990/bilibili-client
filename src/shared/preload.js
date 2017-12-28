import loadGlobal from './loadGlobal';
import loadHome from './loadHome';
import loadVideoPage from './loadVideoPage';
import loadSpace from './loadSpace';

window.addEventListener('DOMContentLoaded', () => {

	removejs('ae.bdstatic.com/msite/static/sdk/main');

	loadGlobal();

	// 首页、分区首页
	if (/bilibili\.com\/index\.html$/.test(window.location.href) ||
	    /\/channel\/\d+\.html$/.test(window.location.href)) loadHome();

	// 视频页
	if (window.location.href.indexOf('video/av') > -1 ||
	    window.location.href.indexOf('html5player.html') > -1) loadVideoPage();

	// 我的
	if (window.location.href.indexOf('bilibili.com/space') > -1) loadSpace();
});

function removejs(filename) {
	const allsuspects = document.getElementsByTagName('script');
	for (var i = allsuspects.length; i >= 0; i--) {
		if (allsuspects[i] &&
		    allsuspects[i].getAttribute('src') != null &&
		    allsuspects[i].getAttribute('src').indexOf(filename) != -1) {
			allsuspects[i].parentNode.removeChild(allsuspects[i]);
			console.log(1);
		} else {
			console.log(2);
		}
	}

}
