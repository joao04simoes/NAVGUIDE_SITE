import { createRouter, createWebHashHistory } from 'vue-router';
import Main from './layouts/Main.vue';
import Blog from './layouts/Blog.vue';
import BlogPostPage from './layouts/BlogPostPage.vue'; // IMPORTANTE!
import techno from './layouts/techno.vue';

const routes = [
  { path: '/', component: Main },
  { path: '/blog', component: Blog },
  { path: '/technology', component: techno },
  { path: '/blog/:id', name: 'BlogPost', component: BlogPostPage }, // ROTA DINÂMICA
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: () => import('./layouts/notFound.vue'),
  }
];

const router = createRouter({
  history: createWebHashHistory('/joao.simoes/NAVGUIDE/'),
  routes,
});

export default router;
