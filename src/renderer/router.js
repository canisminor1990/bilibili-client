import { Route, Router, Switch } from 'dva/router';
import Main from './routes/main';

export default ({ app, history }) => {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" component={Main} />
      </Switch>
    </Router>
  );
};
