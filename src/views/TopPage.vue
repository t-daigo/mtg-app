<template>
  <div class="jumbotron vh-100">
    <div class="container-fluid">
      <div class="row h-25 pt-3">
        <h1 class="mx-auto">MtG 今日の一枚</h1>
      </div>
      <card-info :card="getCard" :loading="isLoading"/>
      <div class="row h-25 pt-3">
        <button class="btn btn-primary btn-lg mx-auto" v-bind:disabled="isLoading" @click="show()">show!</button>
      </div>
      <search-form />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import CardInfo from '@/components/card/CardInfo'
import SearchForm from '@/components/SearchForm'

export default {
  name: 'TopPage',
  components: { SearchForm, CardInfo },
  data: function () {
    return {
      loading: false
    }
  },
  computed: {
    ...mapGetters(['getCard']),
    isLoading: function () {
      return this.loading
    }
  },
  methods: {
    ...mapActions(['fetchRandomCard']),
    show: function () {
      this.loading = true
      this.fetchRandomCard().then(() => {
        this.loading = false
      })
    }
  }
}
</script>

<style scoped>

</style>
