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
      if (cards.length === 0) {
        throw new Error('検索結果が0件です')
      }
      // 基本土地でなく、画像が存在すカード1つを抽出
      const shuffled = shuffle(cards)
      return shuffled.find(card => {
        // 基本土地以外
        return !card.supertypes.includes('Basic') && card.imageUrl
      })
    }).catch(err => {
      // APIエラー時の処理
      console.error(err)
      return null
    })
  }
}
