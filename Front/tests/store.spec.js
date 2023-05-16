import { createStore } from 'vuex';
import storeConfig from './../src/store/index.js';

describe('store', () => {
  let store;

  beforeEach(() => {
    store = createStore(storeConfig);
  });

  it('should correctly mutate the state when setIdUser is committed', () => {
    store.commit('setIdUser', 'test-id');
    expect(store.state.idUser).toBe('test-id');
  });

  it('should correctly mutate the state when setEmailUser is committed', () => {
    store.commit('setEmailUser', 'test@email.com');
    expect(store.state.email).toBe('test@email.com');
  });

  it('should correctly mutate the state when setUsernameUser is committed', () => {
    store.commit('setUsernameUser', 'test-username');
    expect(store.state.username).toBe('test-username');
  });

  // Continuez avec les autres mutations...

  it('should correctly return the idUser when getIdUser is called', () => {
    store.state.idUser = 'test-id';
    expect(store.getters.getIdUser).toBe('test-id');
  });

  it('should correctly return the email when getEmail is called', () => {
    store.state.email = 'test@email.com';
    expect(store.getters.getEmail).toBe('test@email.com');
  });

  it('should correctly return the username when getUsername is called', () => {
    store.state.username = 'test-username';
    expect(store.getters.getUsername).toBe('test-username');
  });
});