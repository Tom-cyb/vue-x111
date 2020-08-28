const state = {
  str: 123,
};
const mutations = {
  addstr(state, page) {
    state.str += page;
  },
  addstr1(state, page) {
    state.str -= page;
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

const namespaced = true;
export { state, mutations, actions, getters, namespaced };
