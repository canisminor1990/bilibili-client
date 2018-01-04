import { connect } from 'dva';
import { Tabs } from 'antd';
import Baisc from './Basic';
import About from './About';
import style from './index.scss';

const TabPane = Tabs.TabPane;

const State = state => ({ a: 1 });

const Setting = () => {
  return (
    <div className={style.view}>
      <Tabs defaultActiveKey="2">
        <TabPane tab="常规" key="1">
          <div className={style.content}>
            <Baisc />
          </div>
        </TabPane>
        <TabPane tab="关于" key="2">
          <div className={style.content}>
            <About />
          </div>
        </TabPane>
      </Tabs>
    </div>
  );
};
export default connect(State)(Setting);
