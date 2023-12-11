import { createRouter, createWebHistory } from 'vue-router'
import { createApp } from 'vue'

import ParkDetailPage from './components/ParkDetailPage.vue'
import BuyTicketPage from './components/BuyTicketPage.vue'
import HomePage from './components/HomePage.vue'
import App from './App.vue'
import '@fortawesome/fontawesome-free/css/all.css';


const app = createApp(App)

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{ path: '/', component: HomePage },
        { path: '/park/:parkName', component: ParkDetailPage },
		{ path: '/buyTicket', component: BuyTicketPage }
	]
})


app.use(router)
app.mount('#app')
