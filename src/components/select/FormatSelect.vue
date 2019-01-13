<template>
  <BaseSelect :selector-id="selectorId" :contents="contents" @select-change="setFormat">
    フォーマット
  </BaseSelect>
</template>

<script>
import BaseSelect from '@/components/select/BaseSelect'
import { FORMAT } from '@/const'

export default {
  name: 'FormatSelect',
  components: { BaseSelect },
  data: function () {
    return {
      selectorId: 'format-select',
      contents: Object.values(FORMAT)
    }
  },
  methods: {
    setFormat: function (value) {
      this.$store.commit('setFormat', value)
    }
  }
}
</script>

<style scoped>

</style>
