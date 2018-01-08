import ElectronStore from 'electron-store';
import _ from 'lodash';
import { Log } from '../utils';

const Store = new ElectronStore();
const DefaultConfig = {
  windowsSize: [375, 650],
  playerSize: [375, 210],
  opacity: 1,
};

const Configs = {
  default: DefaultConfig,
  store: _.assign(DefaultConfig, Store.store),
  restore: () => (Store.store = DefaultConfig),
  get: key => {
    const config = Store.has(key) ? Store.get(key) : DefaultConfig[key];
    Log(`[app][setting] get ${key}: ${config}`);
    return config;
  },
  set: (key, value) => {
    if (typeof key === 'object') {
      Store.set(key);
      Log(`[app][setting] set ${key}`);
    } else {
      if (typeof value === 'object') {
        const oldConfig = Store.has(key) ? Store.get(key) : {};
        Store.set(key, _.assign(oldConfig, value));
      } else {
        Store.set(key, value);
      }
      Log(`[app][setting] set ${key}: ${value}`);
    }
  },
  delete: key => {
    Store.delete(key);
    Log(`[app][setting] delete ${key}`);
  },
};

export default Configs;
