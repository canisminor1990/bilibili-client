import style from './index.scss';

export default ({ loading }) => {
  return loading ? (
    <div id="loading" className={style.loading}>
      <img alt="loading" className={style.gif} src="img/loading.gif" />
    </div>
  ) : null;
};
