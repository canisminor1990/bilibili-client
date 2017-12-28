import dva from 'dva';
import createLoading from 'dva-loading';
import createHistory from 'history/createBrowserHistory';
import { message } from 'antd';
import './index.scss';
import './index.html';

const ERROR_MSG_DURATION = 3; // 3 秒

// 1. Initialize
const app = dva({
  history: createHistory(),
  onError(e) {
    message.error(e.message, ERROR_MSG_DURATION);
  },
});

// 2. Plugins
app.use(createLoading());

// 3. Model
app.model(require('./models/loading'));
app.model(require('./models/history'));

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');
