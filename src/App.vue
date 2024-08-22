<!-- src/App.vue -->
<template>
  <v-app>
    <v-container>
      <FlightList />
    </v-container>
  </v-app>
</template>

<script>
import FlightList from './components/FlightList.vue';

export default {
  components: {
    FlightList,
  },
};
</script>

<script setup>
// Vue composition API setup code can go here
</script>

<style>
/* Global styles can go here */
</style>