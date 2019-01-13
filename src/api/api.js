import shuffle from 'lodash/shuffle'

const mtg = require('mtgsdk')

export default {
  /**
   * ランダムなカードの情報を10枚返す
   * @returns {Promise<Object>}
   */
  fetchRandomCard: async (params) => {
    return mtg.card.where({
      ...params,
      pageSize: 10,
      random: true
    }).then(cards => {
      // 基本土地でないカード1つを抽出
      const shuffled = shuffle(cards)
      return shuffled.find(card => {
        // 基本土地以外
        return !card.supertypes.includes('Basic')
      })
    }).catch(err => {
      // APIエラー時の処理
      alert('APIエラー')
      console.error(err)
      return null
    })
  }
}
