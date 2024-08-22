// plugins/vuetify.js

// Импорт стилей и иконок
import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/styles'; // Глобальные стили Vuetify

// Импорт необходимых модулей Vuetify
import { createVuetify } from 'vuetify';

// Настройка Vuetify
const vuetify = createVuetify({
  theme: {
    defaultTheme: 'dark',
    themes: {
      dark: {
        dark: true,
        colors: {
          background: '#121212',
          surface: '#1d1d1d',
          primary: '#333333',
          secondary: '#555555',
          accent: '#888888',
          error: '#f44336',
          info: '#2196f3',
          success: '#4caf50',
          warning: '#ffeb3b',
        },
      },
    },
  },
});

export default vuetify;