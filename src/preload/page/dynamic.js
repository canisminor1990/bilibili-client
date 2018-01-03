import { AddStyle } from '../utils';

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
