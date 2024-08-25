<template>
    <v-container>
      <v-form @submit.prevent="submitSearch">
        <v-row>
          <v-col cols="12" md="6">
            <v-autocomplete
              v-model="searchParams.from"
              :items="airports"
              item-text="name"
              item-value="code"
              label="From"
              placeholder="Enter departure airport"
              solo
            ></v-autocomplete>
          </v-col>
          <v-col cols="12" md="6">
            <v-autocomplete
              v-model="searchParams.to"
              :items="airports"
              item-text="name"
              item-value="code"
              label="To"
              placeholder="Enter destination airport"
              solo
            ></v-autocomplete>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="6">
            <v-menu
              v-model="departureMenu"
              :close-on-content-click="false"
              :nudge-right="40"
              transition="scale-transition"
              offset-y
              min-width="auto"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="searchParams.departureDate"
                  label="Departure Date"
                  prepend-icon="mdi-calendar"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker v-model="searchParams.departureDate" @input="departureMenu = false"></v-date-picker>
            </v-menu>
          </v-col>
          <v-col cols="12" md="6">
            <v-menu
              v-model="returnMenu"
              :close-on-content-click="false"
              :nudge-right="40"
              transition="scale-transition"
              offset-y
              min-width="auto"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="searchParams.returnDate"
                  label="Return Date"
                  prepend-icon="mdi-calendar"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker v-model="searchParams.returnDate" @input="returnMenu = false"></v-date-picker>
            </v-menu>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-btn color="primary" type="submit">Search Flights</v-btn>
          </v-col>
        </v-row>
      </v-form>
    </v-container>
  </template>
  
  <script>
  export default {
    data() {
      return {
        searchParams: {
          from: '',
          to: '',
          departureDate: '',
          returnDate: '',
        },
        departureMenu: false,
        returnMenu: false,
        airports: [], // Список аэропортов для автозаполнения
      };
    },
    created() {
      // Загрузка данных аэропортов при инициализации компонента
      this.fetchAirports();
    },
    methods: {
      fetchAirports() {
        // Пример запроса к API для получения списка аэропортов
        fetch('http://127.0.0.1:8080/api/airports/') // URL для получения списка аэропортов
          .then(response => response.json())
          .then(data => {
            this.airports = data;
          });
      },
      submitSearch() {
        // Обработка поиска билетов
        console.log(this.searchParams);
        // Здесь нужно добавить логику для отправки данных на бэкенд и получения результатов
      },
    },
  };
  </script>