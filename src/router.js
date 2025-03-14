import { createRouter, createWebHashHistory } from 'vue-router';
import Main from './layouts/Main.vue';
import Blog from './layouts/Blog.vue';


const routes = [
    { path: '/', component: Main },
    { path: '/blog', component: Blog }

];

const router = createRouter({
    history: createWebHashHistory('/joao.simoes/NAVGUIDE/'), // Usa hash mode
    routes,
});


export default router;
