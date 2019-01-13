<template>
    <div class="text-right">
      <a class="btn btn-primary btn-sm" :href="twUrl" target="_blank">
        <!--<img class="img-fluid small" src="../../assets/Twitter_Logo_WhiteOnImage.png">-->
        ツイート
      </a>
    </div>
</template>

<script>
export default {
  name: 'TwitterButton',
  computed: {
    twUrl: function () {
      const currentUrl = encodeURIComponent(location.href)
      const card = this.$store.getters.getCard
      const hashtag = encodeURIComponent('MtG今日の一枚')
      let text
      if (card) {
        text = `今日のカードは<<${card.name}>>です！`
      } else {
        text = 'どんなカードが見つかるかな？'
      }
      text = encodeURIComponent(text)
      return `https://twitter.com/intent/tweet?text=${text}&hashtag=${hashtag}&url=${currentUrl}`
    }
  }
}
</script>

<style scoped>

</style>
