import { mount, createLocalVue } from "@vue/test-utils";
import axiosIntance from "../src/api/caller.service";
import moxios from "moxios";
import Vuex from "vuex";
import store from '../src/store/index.js'
import VueRouter from 'vue-router';
import Signin from "../src/views/Signin/Signin.vue";  // Remplacez cela par le chemin de votre composant

const localVue = createLocalVue();

localVue.use(Vuex);
localVue.use(VueRouter);

describe("Signin", () => {
  let wrapper;
  let store;
  let router;

  beforeEach(() => {
    moxios.install(axiosIntance);

    store = new Vuex.Store({
      state: {
        emailUser: "",
        usernameUser: "",
        userId: ""
      },
      mutations: {
        setEmailUser(state, email) {
          state.emailUser = email;
        },
        setUsernameUser(state, username) {
          state.usernameUser = username;
        },
        setUserId(state, id) {
          state.userId = id;
        }
      }
    });

    router = new VueRouter();

    wrapper = mount(Signin, {
      localVue,
      store,
      router
    });
  });

  afterEach(() => {
    moxios.uninstall(axiosIntance);
  });

  it("handles submission and sets state and localStorage", (done) => {
    const userData = { "username": "testUser", "password": "testPass" };

    wrapper.find("#username").setValue(userData.username);
    wrapper.find("#password").setValue(userData.password);

    moxios.wait(() => {
      let request = moxios.requests.mostRecent();
      request
        .respondWith({
          status: 200,
          response: {
            token: "testToken",
            email: "testEmail",
            username: "testUser",
            id: "testId"
          },
        })
        .then(() => {
          expect(localStorage.getItem('token')).toBe('testToken');
          expect(store.state.emailUser).toBe('testEmail');
          expect(store.state.usernameUser).toBe('testUser');
          expect(store.state.userId).toBe('testId');
          expect(wrapper.vm.$route.path).toBe('/chat');
          done();
        });
    });

    wrapper.find('button').trigger('click');  // Cela déclenche le clic sur le bouton et appelle handleSubmit
  });
});