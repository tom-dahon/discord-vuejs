import { createStore } from "vuex"
const store = createStore({
    state () {
      return {
        token: ''
      }
    },
    mutations: {
      setToken (state, token) {
        state.token = token
      }
    },
    getters: {
      getToken(state) {
        return state.token
      }
    }

})
export default store