import AppData from '../../../../../app/package.json';
import { ipcRenderer as ipc } from 'electron';
import style from './index.scss';

export default () => {
  const Link = url => ipc.send('link', url);
  const Author = () => Link('https://canisminor.cc');
  const Github = () => Link('https://github.com/canisminor1990/bilibili-client');
  return (
    <div>
      <div onClick={Github} className={style.band}>
        <img className={style.logo} alt="logo" src="img/icon.png" />
        <div className={style.text}>Bilibili Mini-Client</div>
        <div className={style.version}>
          Version <span>{AppData.version}</span>
        </div>
      </div>
      <div className={style.info}>
        <div>
          Made by <a onClick={Author}>@CanisMinor</a>
        </div>
        <div>
          MIT开源于<a onClick={Github}>Github</a>
        </div>
      </div>
    </div>
  );
};
