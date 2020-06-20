import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'


Vue.use(Vuex)
let base = window.location.host.includes('localhost') ? '//localhost:3000/' : '/'


let api = Axios.create({
  baseURL: base + "api/",
  timeout: 3000,
  withCredentials: true
})

export default new Vuex.Store({
  state: {
    illustrationPhotos: [],
  },
  mutations: {
    setIllustrationPhotos(state, photos) {
      state.illustrationPhotos = photos
    },
  },
  actions: {
    async addPhoto({ commit, dispatch }, photoData) {
      try {
        let res = await api.post('photos', photoData)
        console.log("add photo", photoData)
        // dispatch('getLists', res.data.boardId)
      } catch (error) {
        console.error(error)
      }
    },
    async getIllustrationPhotos({commit, dispatch}){
      try {
        let res = await api.get('photos')
        commit('setIllustrationPhotos', res.data)

      } catch (error) {
        console.error(error)
      }
    }
  },
  modules: {
  }
})
