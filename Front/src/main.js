import { createApp } from 'vue';
import App from './App.vue';
import Home from './views/Home.vue'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import specific icons */
import { faEnvelope, faUser,faPlus, faGear, faHeadphones, faMicrophone, faCirclePlus,faUserPlus, faAt, faUsers } from '@fortawesome/free-solid-svg-icons'
import router from '@/router';
import { createStore } from 'vuex'
library.add(faUser,faEnvelope,faPlus,faHeadphones,faGear,faMicrophone,faCirclePlus,faUserPlus,faAt,faUsers)
import Multiselect from 'vue-multiselect'
import Select2 from 'vue3-select2-component';
// Create a Vue application
import store from './store'

const app = createApp(App);
app.use(store)
app.use(router)
// app.component('Select2', Select2)
app.component('multiselect', Multiselect)
app.mount('#app')

//Home.component('font-awesome-icon', FontAwesomeIcon)
