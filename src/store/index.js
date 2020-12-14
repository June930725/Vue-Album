import Vue from 'vue'
import Vuex from 'vuex'
import Persistedstate from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      name: '',
      id: ''
    }
  },
  mutations: {
    logout (state) {
      state.user.name = ''
      state.user.id = ''
    },
    login (state, data) {
      state.user.name = data.account
      state.user.id = data._id
    }
  },
  actions: {
  },
  modules: {
  },
  // https://medium.com/@chiafangsung/%E4%BD%BF%E7%94%A8-vuex-persistedstate-%E7%B6%AD%E6%8C%81-vuex-%E7%8B%80%E6%85%8B-f0d7c522c73a
  plugins: [Persistedstate()]
})
