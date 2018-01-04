import { Menu, Dropdown, Icon as AntIcon } from 'antd';
import { Icon } from '../../components/index';
import style from './index.scss';

const MenuItem = (key, type, text, onClick) => (
  <Menu.Item key={key}>
    <div onClick={onClick} className={style.item}>
      <AntIcon type={type} /> {text}
    </div>
  </Menu.Item>
);

export default ({ type, content }) => {
  let Item = [];
  content.map((item, key) => Item.push(MenuItem(key, item[0], item[1], item[2])));
  const DropMenu = <Menu>{Item}</Menu>;

  const Drop = (
    <Dropdown overlay={DropMenu}>
      <Icon type={type} antd nav />
    </Dropdown>
  );
  return Drop;
};
