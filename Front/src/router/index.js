import { createRouter, createWebHistory} from 'vue-router';
import Home from '../views/Home.vue';
import Signin from '../views/Signin/Signin.vue';
import Signup from '../views/Signup.vue';
import store from '../store'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { 
      path: '/chat', 
      component: Home 
    },
    {
      path: '/signin',
      component: Signin
    },
    {
      path: '/signup',
      component: Signup
    },
  ]
})

router.beforeEach((to, from, next) => {
  console.log(store.state.token)
  const publicPages = ['/signin', '/signup'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = store.state.token

  if (authRequired && !loggedIn) {
    next('/signin');
  } else {
    next();
  }
});

export default router;