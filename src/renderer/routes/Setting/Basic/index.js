import { Component } from 'react';
import _ from 'lodash';
import { Configs, UpdateOpacity } from '../../../utils';
import { ipcRenderer as ipc } from 'electron';
import { Switch, Input, Button, message } from 'antd';
import style from './index.scss';

const InputGroup = Input.Group;
const ifTransparent = Configs.store.transparent;

class Basic extends Component {
  state = {
    timekey: 0,
    playerSize: Configs.get('playerSize'),
    windowsSize: Configs.get('windowsSize'),
    transparent: Configs.get('transparent'),
    opacity: Configs.get('opacity'),
  };

  onClickSave = () => {
    this.setState({ timekey: this.state.timekey + 1 });
    Configs.set(this.state);
    ipc.send('video-off');
    if (ifTransparent) UpdateOpacity();
    message.success('保存成功！');
  };
  onClickRestore = () => {
    Configs.set(Configs.defaults);
    this.setState({ timekey: this.state.timekey + 1, ...Configs.defaults });
    ipc.send('video-off');
    UpdateOpacity();
    message.success('重置成功！');
  };

  onChange = (e, key, mode) => {
    const value = parseFloat(e.target.value);
    if (mode === 2) {
      this.setState({ [key]: value });
    } else {
      let newArray = this.state[key];
      newArray[mode] = value;
      this.setState({ [key]: newArray });
    }
  };

  checkboxOnChange = (e, key) => {
    this.setState({ [key]: e });
  };

  render() {
    const SettingInput = (key, title) => {
      const defaultValue = Configs.store[key];
      let InputBox;
      if (_.isArray(defaultValue)) {
        InputBox = [
          <Input
            key={1}
            onChange={e => this.onChange(e, key, 0)}
            style={{ width: '50%' }}
            defaultValue={Configs.get(key)[0]}
          />,
          <Input
            key={2}
            onChange={e => this.onChange(e, key, 1)}
            style={{ width: '50%' }}
            defaultValue={Configs.get(key)[1]}
          />,
        ];
      } else {
        InputBox = (
          <Input
            disabled={!this.state.transparent}
            onChange={e => this.onChange(e, key, 2)}
            defaultValue={Configs.get(key)}
          />
        );
      }
      return (
        <div className={style.cell}>
          <div className={style.title}>{title}:</div>
          <InputGroup compact={true}>{InputBox}</InputGroup>
        </div>
      );
    };

    const SettingSwitch = (key, title, note) => {
      return (
        <div className={style.cell}>
          <div className={style.title}>{title}:</div>
          <span>
            <Switch
              defaultChecked={Configs.get(key)}
              onChange={e => this.checkboxOnChange(e, key)}
            />
            <span>{note}</span>
          </span>
        </div>
      );
    };

    return (
      <div className={style.box} key={this.state.timekey}>
        {SettingInput('playerSize', '播放器尺寸')}
        {SettingInput('windowsSize', '主窗口尺寸')}
        {SettingSwitch('transparent', '透明窗体', '『需要重启应用』')}
        {SettingInput('opacity', '透明度(%)')}
        <div className={style.btnGroup}>
          <Button className={style.btn} type="primary" size="large" onClick={this.onClickSave}>
            保存设置
          </Button>
          <Button className={style.btn} onClick={this.onClickRestore} size="large">
            还原默认
          </Button>
        </div>
      </div>
    );
  }
}

export default Basic;
