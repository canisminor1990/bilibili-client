import dva from 'dva';
import createLoading from 'dva-loading';
import router from './router';
import trigger from './models/trigger';
import history from './models/history';
import { message } from 'antd';
import { Log } from './utils';
import './index.scss';

const ERROR_MSG_DURATION = 3; // 3 秒

// 1. Initialize
const app = dva({
  onError(e) {
    message.error(e.message, ERROR_MSG_DURATION);
    Log(e.message);
  },
});

// 2. Plugins
app.use(createLoading());

// 3. Model
app.model(trigger);
app.model(history);

// 4. Router
app.router(router);

// 5. Start
app.start('#root');
