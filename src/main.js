import { createApp } from 'vue';
import App from './App.vue';
import components from '@/components/UI';
import router from './router/router';

const app = createApp(App);

//глобальна реестрація компоненту(ів) для уникнення необхідності імпорту його(їх) окремо в кожен модуль
components.forEach(component => {
   app.component(component.name, component)
})

//створення єкземпляру апки й монтування його по ІД в корневий дів (папка public/index)
app
   .use(router)
   .mount('#app')
