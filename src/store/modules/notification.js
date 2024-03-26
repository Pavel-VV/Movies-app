import mutation from "../mutations";

const { PUSH_NOTIFICATION } = mutation;

const notification = {
  state: {
    notificationMessage: [],
  },
  getters: {
    getNotifMessage: ({ notificationMessage }) => notificationMessage[0],
  },
  mutations: {
    [PUSH_NOTIFICATION](state, obj) {
      state.notificationMessage.push(obj);
    },
  },
  actions: {
    setNotifMessage({ commit }, obj) {
      commit(PUSH_NOTIFICATION, obj);
    },
  },
};

export default notification;
