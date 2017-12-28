import { Route, Router, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';

export default ({ app, history }) => {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" component={IndexPage} />
      </Switch>
    </Router>
  );
};
