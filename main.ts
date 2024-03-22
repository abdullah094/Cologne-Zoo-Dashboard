import { createApp } from 'vue'
import App from './app.vue'
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import AnimalDetails from './components/AnimalsDetail.vue'

const routes: Array<RouteRecordRaw> = [
    // Define your routes here
    { path: '/animal/:id', name: 'animalDetails', component: AnimalDetails },
    // Add more routes as needed
  ]
const router = createRouter({
  history: createWebHistory(),
  routes
})

const app = createApp(App)
app.use(router)
app.mount('#app')
