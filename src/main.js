import { createRouter, createWebHistory } from 'vue-router'
import { createApp } from 'vue'

import ParkDetailPage from './components/ParkDetailPage.vue'
import BuyTicketPage from './components/BuyTicketPage.vue'
import HomePage from './components/HomePage.vue'
import FavoritesPage from './components/FavoritesPage.vue'
import App from './App.vue'
import '@fortawesome/fontawesome-free/css/all.css';


const app = createApp(App)

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{ path: '/', redirect: { name: 'home' } },
		{ path: '/Waiting-Parks/', component: HomePage, name: 'home' },
		{ path: '/Waiting-Parks/favorites', component: FavoritesPage },
		{ path: '/Waiting-Parks/park/:parkName', component: ParkDetailPage },
		{ path: '/Waiting-Parks/buyTicket', component: BuyTicketPage }
	]
})


app.use(router)
app.mount('#app')
