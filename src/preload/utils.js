const AddStyle = (style, iframe) => {
  let Load;
  const LoadStyle = () => {
    $('body').attr('id', 'preload');
    const css = document.createElement('style');
    css.type = 'text/css';
    css.innerHTML = style.toString();
    if (!iframe) {
      $('head').append(css);
    } else {
      $('head', iframe).append(css);
    }
    if (typeof jQuery !== 'undefined') clearInterval(Load);
  };

  if (typeof jQuery === 'undefined') {
    let head = document.getElementsByTagName('head')[0];
    let script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://cdn.bootcss.com/jquery/3.2.1/jquery.min.js';
    head.appendChild(script);
    Load = setInterval(() => LoadStyle(), 50);
  } else {
    LoadStyle();
  }
};

const is = {
  Home: url => /bilibili\.com\/index\.html$/.test(url) || /\/channel\/\d+\.html$/.test(url),
  Av: url => url.indexOf('video/av') > -1 || url.indexOf('html5player.html') > -1,
  Bangumi: url => url.indexOf('bangumi/play') > -1,
  Space: url => url.indexOf('bilibili.com/space') > -1,
  Dynamic: url => url.indexOf('account/dynamic') > -1,
  Login: url => url.indexOf('bilibili.com/login') > -1 || url.indexOf('bilibili.com/register') > -1,
};

export { AddStyle, is };
