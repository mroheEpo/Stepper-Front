<template>
  <div>
    <BooksAdvertisement
      v-if="showBooks"
    />
  </div>
</template>

<script setup>
  import BooksAdvertisement from './Books.vue';
  import { ref } from 'vue'

  //TODO : see whe show and not
  const showBooks =  ref(true)

</script>

<style lang="scss" scoped>

</style>