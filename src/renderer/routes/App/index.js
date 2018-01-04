import style from './index.scss';

export default ({ children }) => {
  return <div className={style.window}>{children}</div>;
};
