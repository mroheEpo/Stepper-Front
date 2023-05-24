<template>
  <swiper-container 
    :slides-per-view="8"  
    :centered-slides="true"
    @init="swiperInit"
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
  import { ref, onMounted, computed } from 'vue'

  register()

  const ages = ref([])
  const swiper = ref(null)
  const selectedAge = ref(3)

  const emit = defineEmits('get-child-age')
  function childAgeEmit () {
    selectedAge.value = swiper.value.activeIndex + 3
    emit('get-child-age', selectedAge.value)
  }

  function swiperInit (e) {
    swiper.value = e.detail[0]
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