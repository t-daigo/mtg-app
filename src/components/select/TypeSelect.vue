<template>
  <BaseSelect :selector-id="selectorId" :contents="contents" @select-change="setTypes">
    カードタイプ
  </BaseSelect>
</template>

<script>
import BaseSelect from '@/components/select/BaseSelect'
import { TYPES } from '@/const'

export default {
  name: 'TypeSelect',
  components: { BaseSelect },
  data: function () {
    return {
      selectorId: 'type-select',
      contents: Object.values(TYPES)
    }
  },
  methods: {
    setTypes: function (value) {
      this.$store.commit('setTypes', value)
    }
  }
}
</script>

<style scoped>

</style>
