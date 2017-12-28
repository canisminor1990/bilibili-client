import classnames from 'classnames/bind'
import style from './index.scss';

export default ({loading}) => {
	return (
		<webview id="wv"
		         className={classnames.bind(style)('webview',{loading:loading})}
		         src="https://m.bilibili.com/index.html"
		         useragent="bilimini Mobile like (iPhone or Android) whatever AppleWebKit/124.50 Mobile/BI233"
		         preload="../dist/preload.js"
		         disablewebsecurity
		/>
	);
}