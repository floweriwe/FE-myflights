<template>
    <div>
      <h1>Flight List</h1>
      <ul v-if="flights">
        <li v-for="flight in flights" :key="flight.id">{{ flight.name }}</li>
      </ul>
      <p v-else>Loading...</p>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { getFlights } from '@/services/api';
  
  const flights = ref([]);
  
  const fetchFlights = async () => {
    try {
      flights.value = await getFlights();
    } catch (error) {
      console.error('Error fetching flights:', error);
    }
  };
  
  onMounted(() => {
    fetchFlights();
  });
  </script>
  
  <style scoped>
  /* Добавьте стили, если нужно */
  </style>