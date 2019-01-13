<template>
  <div>
    <base-checkbox v-for="(content, index) in contents"
                   :selector-id="selectorId + content.param"
                   :content="content"
                   :key="index"
                   @box-checked="setColors"/>
    <div>
      <base-checkbox :selector-id="selectorId + 'flg'"
                     :content="andFlag"
                     @box-checked="setAndFlag"/>
    </div>
  </div>
</template>

<script>
import BaseCheckbox from '@/components/checkbox/BaseCheckbox'
import { COLORS } from '@/const'

export default {
  name: 'ColorCheckbox',
  components: { BaseCheckbox },
  data: function () {
    return {
      selectorId: 'color-checkbox',
      contents: Object.values(COLORS),
      andFlag: {
        name: 'AND検索（デフォルトはOR検索)',
        param: false
      }
    }
  },
  methods: {
    setColors: function (value) {
      this.$store.dispatch('buildColorsParam', value)
    },
    setAndFlag: function (value) {
      this.$store.commit('setIsColorSearchAnd', value)
    }
  }
}
</script>

<style scoped>

</style>
