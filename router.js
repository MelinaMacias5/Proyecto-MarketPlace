import { createRouter, createWebHistory } from 'vue-router';

// Define las rutas de la aplicación.
const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/HomeView.vue'), // Ruta al componente.
  },
];

// Se crea la instancia del router.
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// Exporta el router para usarlo en main.js.
export default router;
