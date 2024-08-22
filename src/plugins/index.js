/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */

// Plugins
import vuetify from './vuetify'
import pinia from '@/stores'
import router from '@/router'

// Функция для регистрации плагинов
export function registerPlugins (app) {
  app
    .use(vuetify)  // Используем Vuetify
    .use(router)   // Используем Vue Router
    .use(pinia)    // Используем Pinia для управления состоянием
}
