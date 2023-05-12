<template>
  <div>
    <v-alert border="top" color="primary" dark>{{ msg }}</v-alert>
    <span class="scss-var-tester">hello, good by</span>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const props = defineProps({
  msg: {
    type: String,
    required: false,
  },
})
</script>
<style scoped lang="scss">
.scss-var-tester {
  color: $EPOPIA_RED;
  font-family: 'VisbyRoundCF';
}
</style>
