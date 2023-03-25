import { createApp } from 'vue';
import App from './App.vue';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import specific icons */
import { faEnvelope, faUser,faPlus } from '@fortawesome/free-solid-svg-icons'
library.add(faUser,faEnvelope,faPlus)



createApp(App)
.mount('#app')
.component('font-awesome-icon', FontAwesomeIcon)
