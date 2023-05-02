import { createApp } from 'vue';
import App from './App.vue';
import Home from './views/Home.vue'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import specific icons */
import { faEnvelope, faUser,faPlus, faGear, faHeadphones, faMicrophone, faCirclePlus,faUserPlus, faAt } from '@fortawesome/free-solid-svg-icons'
import router from '@/router';
import { createStore } from 'vuex'
library.add(faUser,faEnvelope,faPlus,faHeadphones,faGear,faMicrophone,faCirclePlus,faUserPlus,faAt)



import store from './store'

const app = createApp(App);
app.use(store)
app.use(router)
app.mount('#app')

//Home.component('font-awesome-icon', FontAwesomeIcon)
