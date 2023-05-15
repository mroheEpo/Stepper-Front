<template>
  <div>
    <v-btn
      color="primary"
      class="py-2 px-5 my-2 addToCart__button"
      rounded
      @click="nextStep()"
    >
      Next Step
    </v-btn>
  </div>
</template>

<script setup>
  const emit = defineEmits('cart-validation')
  function nextStep () {
    emit('cart-validation')
  }
</script>

<style scoped lang="scss">

</style>