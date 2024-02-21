import { createRouter, createWebHistory } from 'vue-router'
import CrearCuenta from '@/views/crearCuenta.vue'
import HomePage from '@/views/HomePage.vue'
import LoginVista from '../views/LoginVista.vue'
import compraVentaVista from '../views/compraVentaVista.vue'
import historialVista from '../views/historialVista.vue'
import estadoVista from '@/views/estadoVista.vue'



const routes = [
    {
        path: '/crearCuenta',
        name: '/crearCuenta',
        component: CrearCuenta,

    },
    {
        path: '/Home',
        name: 'HomePage',
        component: HomePage,

    },
    {
        path: '/',
        name: 'loginForm',
        component: LoginVista,
    },
    {
        path: '/compraVenta',
        name: 'compraVenta',
        component: compraVentaVista,
    },
    {
        path: '/historialMove',
        name: 'historialMove',
        component: historialVista,
    },
    {
        path: '/estadoActual',
        name: 'estadoActual',
        component: estadoVista,

    },

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router