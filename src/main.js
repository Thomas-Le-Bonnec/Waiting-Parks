import { createRouter, createWebHistory } from 'vue-router'
import { createApp } from 'vue'

import FavoriteParksPage from './components/FavoriteParksPage.vue'
import ParkDetailPage from './components/ParkDetailPage.vue'
import TestPage from './components/TestPage.vue'
import HomePage from './components/HomePage.vue'
import App from './App.vue'
import '@fortawesome/fontawesome-free/css/all.css';


const app = createApp(App)

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{ path: '/', component: HomePage },
		{ path: '/favorites', component: FavoriteParksPage },
        { path: '/park/:parkName', component: ParkDetailPage },
		{ path: '/test', component: TestPage }
	]
})


app.use(router)
app.mount('#app')
