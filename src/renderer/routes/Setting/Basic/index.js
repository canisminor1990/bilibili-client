import { Component } from 'react';
import _ from 'lodash';
import { Configs } from '../../../utils';
import { Input, Button, message } from 'antd';
import style from './index.scss';

const InputGroup = Input.Group;

class Basic extends Component {
  state = {
    configs: Configs.store,
  };

  onClickSave = () => {
    message.success('保存成功！');
  };
  onClickRestore = () => {
    message.success('重置成功！');
  };

  render() {
    const { configs } = this.state;
    const SettingInput = (key, title) => {
      const defaultValue = configs[key];
      let InputBox;
      if (_.isArray(defaultValue)) {
        InputBox = [
          <Input key={1} style={{ width: '50%' }} defaultValue={configs[key][0]} />,
          <Input key={2} style={{ width: '50%' }} defaultValue={configs[key][1]} />,
        ];
      } else {
        InputBox = <Input defaultValue={configs[key]} />;
      }
      return (
        <div className={style.cell}>
          <div className={style.title}>{title}:</div>
          <InputGroup compact={true}>{InputBox}</InputGroup>
        </div>
      );
    };
    return (
      <div className={style.box}>
        {SettingInput('playerSize', '播放器尺寸')}
        {SettingInput('windowsSize', '主窗口尺寸')}
        {SettingInput('opacity', '透明度')}
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
