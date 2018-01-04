import { Log } from '../utils';
import chalk from 'chalk';
import { shell, dialog } from 'electron';
import appData from '../../../package.json';
import fetch from 'electron-fetch';

export default () => {
  try {
    const version = `v${appData.version}`;
    fetch('https://api.github.com/repos/canisminor1990/bilibili-client/releases/latest')
      .then(res => res.text())
      .then(body => {
        const Body = JSON.parse(body);
        const newVersion = Body['tag_name'];
        Log(`[app][check-update] Local: ${chalk.green(version)} Repo: ${chalk.green(newVersion)}`);
        if (versionfunegt(newVersion, version)) {
          dialog.showMessageBox(
            null,
            {
              buttons: ['取消', '去更新'],
              message: `检查到新版本${newVersion}，您正在使用的版本是${version}，是否前往更新？`,
            },
            res => {
              if (res === 1) {
                shell.openExternal('https://github.com/canisminor1990/bilibili-client/releases');
              }
            }
          );
        }
      });
  } catch (e) {}
};

const versionfunegt = (ver1, ver2) => {
  ver1 = ver1.replace('v', '');
  ver2 = ver2.replace('v', '');
  const version1pre = parseFloat(ver1);
  const version2pre = parseFloat(ver2);
  const version1next = ver1.replace(version1pre + '.', '');
  const version2next = ver2.replace(version2pre + '.', '');
  if (version1pre > version2pre) {
    return true;
  } else if (version1pre <= version2pre) {
    return false;
  } else {
    if (version1next > version2next) {
      return true;
    } else {
      return false;
    }
  }
};
