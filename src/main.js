/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App
 */

// Plugins
import { registerPlugins } from '@/plugins'; // Если у вас есть файлы в папке plugins

// Components
import { createApp } from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify'; // Импортируйте правильно настроенный экземпляр Vuetify

// Создание приложения Vue
const app = createApp(App);

// Регистрация плагинов
registerPlugins(app);

// Использование Vuetify
app.use(vuetify);

// Монтирование приложения в элемент с id='app'
app.mount('#app');