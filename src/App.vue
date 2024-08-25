<template>
  <v-app>
    <v-container>
      <v-row>
        <v-col>
          <v-card>
            <v-card-title>Flight Search</v-card-title>
            <v-card-text>
              <flight-search></flight-search>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import FlightSearch from './components/FlightSearch.vue';

export default {
  components: {
    FlightSearch
  }
}
</script>

<style>
body {
  background-color: #f5f5f5;
}
</style>