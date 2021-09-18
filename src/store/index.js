import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // 存储共享数据
  state: {
    user: JSON.parse(window.localStorage.getItem('user') || null)
  },
  // 更改vuex的store中的数据的唯一方法
  mutations: {
    setUser (state, payload) {
      state.user = JSON.parse(payload)
      window.localStorage.setItem('user', payload)
    }
  },
  // 处理异步操作
  actions: {
  },
  modules: {
  }
})
