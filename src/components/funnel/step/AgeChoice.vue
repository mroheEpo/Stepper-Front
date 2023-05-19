<template>
  <swiper-container 
    :slides-per-view="9"  
    :centered-slides="true"
    @slidechange="childAgeEmit"
  >
    <swiper-slide
      v-for="age in ages"
      :key="age"
    >
      {{ age }}
    </swiper-slide>
  </swiper-container>
</template>

<script setup>
  import { register } from 'swiper/element/bundle'
  import { Navigation, Pagination } from 'swiper'
  import { ref, onMounted } from 'vue'

  register()

  const ages = ref([])
  const selectedAge = ref(3)

  const emit = defineEmits('get-child-age')
  const childAgeEmit = (e) => {
    console.log('here')
    console.log(e)
    //TODO : récupérer la valeur
    selectedAge.value = 4
    emit('get-child-age', selectedAge.value)
  }

  function generateArrayOfAges (ages) {
    for (var i = 3; i <= 15; i++) {
      ages.value.push(i)
    }
    return ages
  }

  onMounted(() => {
    generateArrayOfAges(ages);
  })
</script>

<style>
</style>