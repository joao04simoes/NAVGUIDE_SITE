import { createRouter, createWebHashHistory } from 'vue-router';

// Import components
import Blog from '../components/BLOG.vue';
import main from '../components/main.vue';
import BUSS from '../components/BUSS.vue';

// Define routes
const routes = [
    { path: '/', name: 'main', component: main },
    { path: '/Blog', name: 'Blog', component: Blog },
    { path: '/BUSS', name: 'BUSS', component: BUSS, }
];

// Create the router instance
const router = createRouter({
    history: createWebHashHistory('/joao.simoes/NAVGUIDE/'), // Usa hash mode
    routes,
});

export default router;
