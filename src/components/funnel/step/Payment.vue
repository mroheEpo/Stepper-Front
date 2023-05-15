<template>
  <div>
    <BooksAdvertisement
      v-if="showBooks"
      @no-books="showBooks = false"
      @add-book="addBookToCart()"
    />
  </div>
</template>

<script setup>
  import BooksAdvertisement from './Books.vue';
  import { ref } from 'vue'

  const props = defineProps({
    showBooks: {
      type: Boolean,
      default: true
    },
  })

  const emit = defineEmits('add-book')
  function addBookToCart () {
    props.showBooks = false
    emit('add-book')
  }

</script>

<style lang="scss" scoped>

</style>