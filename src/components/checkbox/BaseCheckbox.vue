<template>
  <div class="form-check form-check-inline">
    <input type="checkbox"
           class="form-check-input"
           :id="selectorId"
           :value="content.param"
           @change="selected">
    <label :for="selectorId" class="form-check-label">
      {{content.name}}
    </label>
  </div>
</template>

<script>
export default {
  name: 'BaseCheckbox',
  props: {
    selectorId: {
      type: String,
      required: true
    },
    content: {
      type: Object,
      required: true
    }
  },
  methods: {
    selected: function (event) {
      this.$emit('box-checked', event.target.value)
    }
  }
}
</script>

<style scoped>

</style>
