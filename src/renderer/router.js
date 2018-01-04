import { Route, Router, Switch } from 'dva/router';
import App from './routes/App';
import Main from './routes/Main';

export default ({ app, history }) => {
  return (
    <Router history={history}>
      <Switch>
        <App>
          <Route exact path={window.rooturl} component={Main} />
        </App>
      </Switch>
    </Router>
  );
};
