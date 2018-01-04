export default {
  namespace: 'trigger',
  state: {
    loading: true,
  },
  reducers: {
    save(state, { payload: data }) {
      return data;
    },
  },
  effects: {
    *update({ payload: data }, { put }) {
      yield put({ type: 'save', payload: data });
    },
  },
};
