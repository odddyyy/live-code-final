import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    countries: '',
    userId: ''
  },
  mutations: {
    fillCountry(state, payload) {
      payload.sort((a,b) => a.id - b.id)
      state.countries = payload
    },
    fillId(state, id) {
      state.userId = id
    }
  },
  actions: {
    getCountries(context) {
      axios({
        method:'GET',
        url: 'http://localhost:3000/countries',
        headers: {
          token: localStorage.token
        }
      })
      .then(data => {
        context.commit('fillCountry', data.data)
      })
      .catch(response => {
        console.log(response)
      })
    },
    throwId(context, id) {
      context.commit('fillId', id)
    } 
  },
  modules: {
  }
})
