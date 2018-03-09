

const websocket = {
  state: {
    socket: '',
  },
  getters: {
    getSocket: state => state.socket,
  },
  mutations: {
    setGetSocket (state, data) {
      state.socket = data
    },

  },
  actions: {

    setGetSocket (state, data) {
      state.socket = data
    },

  }
}

export default websocket
