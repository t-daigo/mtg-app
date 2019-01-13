<template>
  <div class="row pt-3">
    <card-viewer class="mx-auto" v-if="card" :card="getCard"/>
    <LoadingSpinner class="mx-auto" v-show="loading" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CardViewer from '@/components/CardViewer'
import LoadingSpinner from '@/components/LoadingSpinner'

export default {
  name: 'showCardPage',
  components: { LoadingSpinner, CardViewer },
  props: {
    card: {
      type: Object
    },
    loading: {
      type: Boolean
    }
  },
  computed: {
    ...mapGetters(['getCard'])
  }
}
</script>
