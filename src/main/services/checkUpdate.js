import { Log } from '../utils';
import chalk from 'chalk';
import { shell, dialog } from 'electron';
import appData from '../../../app/package.json';
import fetch from 'electron-fetch';

export default () => {
  try {
    const version = `v${appData.version}`;
    fetch('https://api.github.com/repos/canisminor1990/bilibili-client/releases/latest')
      .then(res => res.text())
      .then(body => {
        const Body = JSON.parse(body);
        const newVersion = Body['tag_name'];
        Log(
          `[app][check-update] Local: ${chalk.green(version)} Repo: ${chalk.green(
            newVersion
          )} Check: ${compare(version, newVersion)}`
        );
        if (compare(version, newVersion)) {
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

const compare = (curV, reqV) => {
  if (curV && reqV) {
    const arr1 = curV.replace('v', '').split('.');
    const arr2 = reqV.replace('v', '').split('.');
    const minLength = Math.min(arr1.length, arr2.length);
    let position = 0;
    let diff = 0;
    while (
      position < minLength &&
      (diff = parseInt(arr1[position]) - parseInt(arr2[position])) === 0
    ) {
      position++;
    }
    diff = diff !== 0 ? diff : arr1.length - arr2.length;
    return diff < 0;
  } else {
    Log('[app][check-update] 版本号不能为空');
    return false;
  }
};
