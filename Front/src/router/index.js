import { createRouter, createWebHistory} from 'vue-router';
import Home from '../views/Home.vue';
import Chat from '../components/chat/chat.vue';
import Signin from '../views/Signin/Signin.vue';
import Signup from '../views/Signup/Signup.vue';
import store from '../store'
import sidebar from '../views/Home/sidebar.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { 
      path: '/chat', 
      component: Chat
    },
    { 
      path: '/chat/:id', 
      component: Chat
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

// router.beforeEach((to, from, next) => {
//   console.log(store.state.token)
//   const publicPages = ['/signin', '/signup'];
//   const authRequired = !publicPages.includes(to.path);
//   const loggedIn = store.state.token

//   if (authRequired && !loggedIn) {
//     next('/signin');
//   } else {
//     next();
//   }
// });

export default router;