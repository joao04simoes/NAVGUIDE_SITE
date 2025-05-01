import { createRouter, createWebHashHistory } from 'vue-router';
import Main from './layouts/Main.vue';
import Blog from './layouts/Blog.vue';
import techno from './layouts/techno.vue';


const routes = [
    { path: '/', component: Main },
    { path: '/blog', component: Blog },
    { path: '/technology', component: techno },
    {
        path: '/:catchAll(.*)',
        name: 'NotFound',
        component: () => import('./layouts/notFound.vue'),
    }

];

const router = createRouter({
    history: createWebHashHistory('/joao.simoes/NAVGUIDE/'), // Usa hash mode
    routes,
});


export default router;
