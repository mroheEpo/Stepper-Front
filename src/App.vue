<template>
  <v-app id="app">
    <v-container>
      <FunnelView />
    </v-container>
  </v-app>
</template>

<script setup>
import FunnelView from './components/funnel/Funnel.vue';
</script>

<style lang="scss">
body {
  background: #000;
}
</style>
