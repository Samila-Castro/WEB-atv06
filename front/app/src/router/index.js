import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ListAll from '../views/ListAll.vue'
import Edit from '../views/Edit.vue'
import ListById from '../views/ListById.vue'
import Login from '../views/Login.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/listar-all',
    name: 'ListAll',
    component: ListAll
  },

  {
    path: '/edit/:id',
    name: 'Edit',
    component: Edit
  },
  {
    path: '/listOne/:id',
    name: 'ListById',
    component: ListById
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }


];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
 
export default router;