import mutation from "../mutations";

const { PUSH_NOTIFICATION } = mutation;

const notificationStore = {
  state: {
    notificationMessage: [],
  },
  getters: {
    getNotifMessage: ({ notificationMessage }) =>
      notificationMessage[notificationMessage.length - 1],
  },
  mutations: {
    [PUSH_NOTIFICATION](state, msg) {
      state.notificationMessage.push(msg);
    },
  },
  actions: {
    setNotifMessage({ commit }, msg) {
      commit(PUSH_NOTIFICATION, msg);
    },
  },
};

export default notificationStore;
