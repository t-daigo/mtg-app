<template>
  <div class="form-group">
    <label :for="selectorId">
      <slot></slot>
    </label>
    <select :id="selectorId" class="form-control" @change="selectChange">
      <option v-for="(content, index) in contents" :key="index" :value="content.param">
        {{content.name}}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'BaseSelect',
  props: {
    selectorId: {
      type: String,
      required: true
    },
    contents: {
      type: Array,
      required: true
    },
    actionName: {
      type: String
    }
  },
  methods: {
    selectChange: function (event) {
      this.$emit('select-change', event.target.value)
    }
  }
}
</script>

<style scoped>

</style>
