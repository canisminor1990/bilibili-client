const Hide     = (className) => `${className} {display: none !important;}`;
const AddStyle = (style) => {
	const css     = document.createElement('style');
	css.type      = 'text/css';
	css.innerHTML = style;
	document.head.appendChild(css);
};

export {Hide,AddStyle}