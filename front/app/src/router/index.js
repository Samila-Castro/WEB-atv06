import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ListAll from '../views/ListAll.vue'
import Login from '../views/Login.vue'


const routes = [
  {
    path: '/cadastro',
    name: 'Home',
    component: Home
  },
  {
    path: '/listar-all',
    name: 'ListAll',
    component: ListAll
  },

  {
    path: '/',
    name: 'Login',
    component: Login
  }


];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
 
export default router;