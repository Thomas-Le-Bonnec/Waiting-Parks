import { createRouter, createWebHistory } from 'vue-router'
import { createApp } from 'vue'

import FavoriteParksPage from './components/FavoriteParksPage.vue'
import HomePage from './components/HomePage.vue'
import App from './App.vue'


const app = createApp(App)

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{path: '/', component: HomePage},
        {path: '/favorites', component: FavoriteParksPage}
	]
})


app.use(router)
app.mount('#app')
