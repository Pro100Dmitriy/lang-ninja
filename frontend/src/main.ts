import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import './assets/sass/styles.sass'

const router = createRouter( {
	history: createWebHistory(),
	routes: [
		{
			name: 'Login',
			path: '/login',
			component: () => import( './views/Login.vue' )
		},
		{
			name: 'Dashboard',
			path: '/',
			component: () => import( './views/Dashboard.vue' )
		}
	]
} )

createApp( App )
	.use( router )
	.mount( '#app' )
