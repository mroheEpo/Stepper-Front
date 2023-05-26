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
  import { ref, onMounted, computed, reactive } from 'vue'

  register()

  const ages = ref([])
  let swiper = reactive({});
  const selectedAge = ref(null)

  const emit = defineEmits('get-child-age')
  function childAgeEmit () {
    selectedAge.value = swiper.activeIndex + 3
    emit('get-child-age', selectedAge.value)
  }

  function swiperInit (e) {
    swiper = e.detail[0]
    selectedAge.value = swiper.activeIndex + 3
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