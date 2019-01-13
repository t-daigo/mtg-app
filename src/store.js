import Vue from 'vue'
import Vuex from 'vuex'
import API from '@/api/api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    card: null,
    jpnCard: null
  },
  mutations: {
    setCardInfo: (state, payload) => {
      state.card = payload
    },
    setJpnCardInfo: (state, payload) => {
      state.jpnCard = payload
    }
  },
  actions: {
    fetchRandomCard: async ({ commit }) => {
      commit('setCardInfo', null)
      commit('setJpnCardInfo', null)
      /**
       * 日本語の存在するカード
       * @type {Object}
       */
      return API.fetchRandomCard().then(card => {
        commit('setCardInfo', card)
        // 日本語カードがあればcommit
        const jpnCard = card.foreignNames.find(foreignName => {
          return foreignName.language === 'Japanese'
        })
        commit('setJpnCardInfo', jpnCard)
      })
    }
  },
  getters: {
    getCard: state => {
      return state.jpnCard ? state.jpnCard : state.card
    }
  }
})
