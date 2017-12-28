import style from './index.scss';

export default () => {
	return (
		<webview id="wv"
		         className={style.webview}
		         src="https://m.bilibili.com/index.html"
		         useragent="bilimini Mobile like (iPhone or Android) whatever AppleWebKit/124.50 Mobile/BI233"
		         preload="../dist/preload.js"
		         disablewebsecurity
		/>
	);
}