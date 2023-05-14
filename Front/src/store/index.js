import { createStore } from "vuex"
const store = createStore({
    state () {
      return {
        idUser: null,
        username: null,
        email: null,
        idChannel: null,
      }
    },
    mutations: {
      setIdUser (state, idUser) {
        state.idUser=idUser
      },
      setEmailUser (state, email) {
        state.email=email
      },
      setUsernameUser (state, username) {
        state.username=username
      },
      setIdChannel (state, idChannel) {
        state.idChannel=idChannel
      },
    },
    getters: {
      getToken(state) {
        return state.token
      },
      getIdUser(state) {
        return state.idUser
      },
      getUsername(state) {
        return state.username
      },
      getEmail(state) {
        return state.email
      },
      getIdChannel(state) {
        return state.idChannel
      },
      
    }

})
export default store