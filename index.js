import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import Page2View from '@/views/Page2View.vue';
import AboutView from '@/views/AboutView.vue'; // New component
import ContactView from '@/views/ContactView.vue'; // New component

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/page2',
    name: 'page2',
    component: Page2View,
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView, // Route for AboutView
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView, // Route for ContactView
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
