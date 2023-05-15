import { mount, createLocalVue } from "@vue/test-utils";
import axiosIntance from "../src/api/caller.service";
import Vuex from "vuex";
import store from '../src/store/index.js'
import router from 'vue-router';
import Signin from "../src/views/Signin/Signin.vue";  // Remplacez cela par le chemin de votre composant
import moxios from "moxios";
import { getConnexion } from "../src/api/caller.service";

jest.mock("../src/api/caller.service");
jest.mock("../src/router/index.js");

describe("Signin.vue", () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it("handleSubmit should handle successful response", async () => {
    const wrapper = mount(Signin, { store });

    const response = {
      status: 200,
      data: {
        token: "test-token",
        email: "test@example.com",
        username: "test-username",
        id: 1,
      },
    };

    getConnexion.mockResolvedValue(response);
    router.push.mockImplementation(() => {});

    const username = { value: "test-username" };
    const password = { value: "test-password" };

    wrapper.vm.handleSubmit.call({ $store: store, username, password });

    await moxios.wait();

    expect(getConnexion).toHaveBeenCalledWith({
      username: username.value,
      password: password.value,
    });
    expect(localStorage.setItem).toHaveBeenCalledWith("token", response.data.token);
    expect(store.commit).toHaveBeenCalledWith("setEmailUser", response.data.email);
    expect(store.commit).toHaveBeenCalledWith("setUsernameUser", response.data.username);
    expect(store.commit).toHaveBeenCalledWith("setUserId", response.data.id);
    expect(router.push).toHaveBeenCalledWith("/chat");
  });
});