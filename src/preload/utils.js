const AddStyle = (style, iframe) => {
  $(() => {
    const css = document.createElement('style');
    css.type = 'text/css';
    css.innerHTML = style;
    if (!iframe) {
      $('head').append(css);
    } else {
      $('head', iframe).append(css);
    }
  });
};

const isHome = url => /bilibili\.com\/index\.html$/.test(url) || /\/channel\/\d+\.html$/.test(url);
const isAv = url => url.indexOf('video/av') > -1 || url.indexOf('html5player.html') > -1;
const isBangumi = url => url.indexOf('bangumi/play') > -1;
const isSpace = url => url.indexOf('bilibili.com/space') > -1;
const isDynamic = url => url.indexOf('account/dynamic') > -1;

export { AddStyle, isHome, isAv, isBangumi, isSpace, isDynamic };
