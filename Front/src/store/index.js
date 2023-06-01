import { createStore } from "vuex"
const store = createStore({
    state () {
      return {
        idUser: null,
        username: null,
        email: null,
        idChannel: null,
        nameChannel: null,
        message:[],
        selectedItem:[],
        channeltype: '',
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
      setNameChannel (state, data) {
        state.nameChannel=data
      },
      setMessage (state, message) {
        state.message=message
      },
      setSelectedItem (state, selectedItem) {
        state.selectedItem=selectedItem
      },
      setChannelType(state, channelType) {
        state.channeltype = channelType
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
      getNameChannel(state) {
        return state.nameChannel
      },
      getMessage(state){
        return state.message
      },
      getSelectedItem(state){
        return state.selectedItem
      },
      getChannelType(state) {
        return state.channeltype
      },
      
    }

})
export default store