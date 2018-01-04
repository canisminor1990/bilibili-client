import log from 'fancy-log';
import chalk from 'chalk';
import _ from 'lodash';

const c = (color, str) => `[${chalk[color](str)}]`;

const Log = (str, ...other) => {
  let content = _.compact([str, ...other].join(' ').split(/\[([-a-zA-Z]+)\]/g));
  switch (content.length) {
    case 1:
      log(content.shift());
      break;
    case 2:
      log(c('magenta', content.shift()) + content.join(' '));
      break;
    case 3:
      log(c('magenta', content.shift()), c('cyan', content.shift()) + content.join(' '));
      break;
  }
};

export { Log };
