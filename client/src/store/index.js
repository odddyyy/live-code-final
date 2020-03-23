import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    countries: ''
  },
  mutations: {
    fillCountry(state, payload) {
      state.countries = payload
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
    } 
  },
  modules: {
  }
})
