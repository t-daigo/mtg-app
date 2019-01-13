import Vue from 'vue'
import Vuex from 'vuex'
import API from '@/api/api'
import { FORMAT } from '@/const'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    card: null,
    jpnCard: null,
    gameFormat: FORMAT.STANDARD.param
  },
  mutations: {
    setCardInfo: (state, payload) => {
      state.card = payload
    },
    setJpnCardInfo: (state, payload) => {
      state.jpnCard = payload
    },
    setFormat: (state, payload) => {
      state.gameFormat = payload
    }
  },
  actions: {
    fetchRandomCard: async ({ commit, state }) => {
      commit('setCardInfo', null)
      commit('setJpnCardInfo', null)
      const params = {
        gameFormat: state.gameFormat
      }
      /**
       * 日本語の存在するカード
       * @type {Object}
       */
      return API.fetchRandomCard(params).then(card => {
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
