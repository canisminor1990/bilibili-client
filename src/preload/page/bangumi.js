export function style() {}

export function init() {
  window.onload = () => {
    let history = '';
    let url = window.location.href;
    const bangumiFullscreen = setInterval(() => {
      url = window.location.href;
      console.log($('.bilibili-player-iconfont-web-fullscreen').length);
      if ($('.bilibili-player-iconfont-web-fullscreen').length > 0) {
        $('.bilibili-player-iconfont-web-fullscreen').click();
      }
    }, 50);
    if (url.indexOf('bangumi/play') === -1) clearInterval(bangumiFullscreen);
  };
}
