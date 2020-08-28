const namespaced = true;
const state = {
  num: 666,
};
const mutations = {
  addstr(state, page) {
    state.num += page;
  },
  addstr1(state, page) {
    state.num -= page;
  },
};
const actions = {
  Addstr(context, page) {
    context.commit("addstr", page);
  },
};
const getters = {
  updata(state) {
    return "我是改变后的数据" + state.str;
  },
};
export { state, mutations, actions, getters, namespaced };
