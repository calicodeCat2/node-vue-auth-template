import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

import router from "./router/index.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: [],
    users: [],
    authUser: []
  },
  getters: {},
  mutations: {
    // SET_NEWUSER(state, users) {
    //   state.users = users;
    // },
    SET_USER(state, user) {
        state.user = user;
      }
  },
  actions: {
    // registerUser({ commit }, newUser) {
    //   axios
    //     .post("http://localhost:8000/register", 
    //     newUser)
    //     .then(res => console.log('register', data))
    //     .catch(error => console.error(error))
    // }
  },
    loginUser({commit}, user) {
       axios
        .post('http://localhost:8000/login', user)
        .then(response => {
            console.log(response.data);
            let authUser = response.data
            commit("SET_USER", authUser)
            
        }).catch(error => console.error(error))
    }
});
