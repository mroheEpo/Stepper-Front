<template>
  <div>
    <v-btn
      v-if="!isSchool"
      color="secondary"
      class="py-2 px-5 my-2 addToCart__button"
      rounded
      @click="getCustomerType(true)"
    >
      Je suis une école
    </v-btn>
    <v-btn
      v-else
      color="secondary"
      class="py-2 px-5 my-2 addToCart__button"
      rounded
      @click="getCustomerType(false)"
    >
      Je suis un particulier
    </v-btn>
  </div>
</template>

<script setup>
  const props = defineProps({
    isSchool: {
      type: Boolean,
      default: false
    },
  })

  const emit = defineEmits('get-customer-type')
  function getCustomerType (datas) {
    emit('get-customer-type', datas)
  }
</script>

<style scopped lang="scss">

</style>