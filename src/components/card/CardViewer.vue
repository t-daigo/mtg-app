<template>
    <div>
        <img v-if="card" :src="card.imageUrl" :alt="card.name">
    </div>
</template>
<script>
export default {
  name: 'card-viewer',
  props: {
    card: {
      type: Object
    }
  }
}
</script>
