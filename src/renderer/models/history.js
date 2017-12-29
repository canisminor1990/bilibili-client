import _ from 'lodash';

export default {
  namespace: 'history',
  state: {
    stack: ['https://m.bilibili.com/index.html'],
    pos: 0,
  },
  reducers: {
    save(state, { payload: data }) {
      return data;
    },
  },
  effects: {
    *add({ payload: url }, { put, select }) {
      const history = yield select(state => state.history);
      if (history.pos + 1 < history.stack.length) {
        history.stack = _.dropRight(history.stack, history.stack.length - (history.pos + 1));
      }
      history.stack.push(url);
      history.pos = history.stack.length - 1;
      console.log('[history]', 'add', history);
      yield put({ type: 'save', payload: history });
    },
    *pos({ payload: num }, { put, select }) {
      const history = yield select(state => state.history);
      history.pos = num;
      console.log('[history]', 'pos', num);
      yield put({ type: 'save', payload: history });
    },
  },
};
