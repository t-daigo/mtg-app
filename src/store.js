import Vue from 'vue'
import Vuex from 'vuex'
import API from '@/api/api'
import { FORMAT } from '@/const'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    card: null,
    jpnCard: null,
    gameFormat: FORMAT.STANDARD.param,
    types: '',
    colors: [],
    isColorSearchAnd: false
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
    },
    setTypes: (state, payload) => {
      state.types = payload
    },
    setColors: (state, payload) => {
      state.colors = [...state.colors, payload]
      console.log(state.colors)
    },
    removeColors: (state, payload) => {
      state.colors = state.colors.filter(color => color !== payload)
    },
    setIsColorSearchAnd: (state, payload) => {
      state.isColorSearchAnd = payload
    }
  },
  actions: {
    fetchRandomCard: async ({ commit, state }) => {
      commit('setCardInfo', null)
      commit('setJpnCardInfo', null)
      // GETパラメータ組み立て
      let colors = state.isColorSearchAnd ? state.colors.join() : state.colors.join('|')
      const params = {
        gameFormat: state.gameFormat,
        types: state.types,
        colors: colors
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
      }).catch(() => {
        alert('APIエラー')
      })
    },
    buildColorsParam: ({ commit, state }, color) => {
      if (state.colors.includes(color)) {
        commit('removeColors', color)
      } else {
        commit('setColors', color)
      }
    }
  },
  getters: {
    getCard: state => {
      return state.jpnCard ? state.jpnCard : state.card
    }
  }
})
