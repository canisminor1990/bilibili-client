import { AddStyle, isDynamic } from '../utils';

export function style() {
  // language=SCSS
  AddStyle(`
	  .share,
	  .z_top,
	  .index-nav,
	  .float_window,
	  .footer,
	  .sd.l{
		  display: none !important;
	  }
	  .ct{
		  margin: 0 !important;
		  width: 100vw;
	  }
	  .dyn-tab{
		  border: none !important;
		  background: #f8f8f8 !important;
	  }
	  .stm-ly .ct .stm-filter li.on{
		  background: #fff;
	  }
	  .main-inner{
		  width: 100%;
	  }
	  .stm-ly{
		  margin: 0;
	  }
	`);
}

export function init() {
  $(() => {
    let history;
    let url = window.location.href;
    const timeout = 50;
    const fullscreen = setInterval(() => {
      url = window.location.href;
      if (history !== url) {
        $('a').bind('click', function() {
          window.location.href = this.href;
        });
        history = url;
      }
    }, timeout);
    if (!isDynamic(url)) clearInterval(fullscreen);
  });
}
