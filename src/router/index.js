import { createRouter, createWebHashHistory } from 'vue-router';

// Import components
import Blog from '../components/BLOG.vue';
import main from '../components/main.vue';


// Define routes
const routes = [
    { path: '/', name: 'main', component: main },
    { path: '/Blog', name: 'Blog', component: Blog },

];

// Create the router instance
const router = createRouter({
    history: createWebHashHistory('/joao.simoes/NAVGUIDE/'), // Usa hash mode
    routes,
});

export default router;
