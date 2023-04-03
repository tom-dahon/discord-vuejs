import { createRouter, createWebHistory} from 'vue-router';
import Home from '../views/Home.vue';
import Signin from '../views/Signin/Signin.vue';
import Signup from '../views/Signup.vue';


const router = createRouter({
  history: createWebHistory(),
  routes: [
    { 
      path: '/', 
      component: Home 
    },
    {
      path: '/signin',
      component: Signin
    },
    {
      path: '/signup',
      component: Signup
    }
  ]
})

export default router;