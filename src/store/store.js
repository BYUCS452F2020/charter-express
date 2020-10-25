import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    token: null,
    user: null,
    access_level: 0,
    isUserLoggedIn: false
  },
  mutations: {
    setToken (state, token) {
      state.token = token
      state.isUserLoggedIn = !!(token)
    },
    setUser (state, user) {
      state.user = user
    },
    setAccessLevel (state, accessLevel) {
      state.access_level = accessLevel
    }
  },
  actions: {
    setToken ({commit}, token) {
      commit('setToken', token)
    },
    setUser ({commit}, user) {
      console.log(user)
      commit('setUser', user)
    },
    setAccessLevel ({commit}, accessLevel) {
      console.log("accesslevel:"+accessLevel)
      commit('setAccessLevel', accessLevel)
    }
  }
})