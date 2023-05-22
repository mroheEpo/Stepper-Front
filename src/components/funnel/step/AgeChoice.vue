<template>
  <swiper-container 
    :slides-per-view="8"  
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
    //TODO : find better method
    setTimeout(() => {
      for (var i = 0; i < (e.target).childNodes.length; i++) {
        if (e.target.childNodes[i].className == "swiper-slide-active") {
          selectedAge.value = i + 3
        }
      }
    }, 100)
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