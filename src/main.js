import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
Vue.config.productionTip = false

import { library } from '@fortawesome/fontawesome-svg-core';
import { faAngleDown, faRocket, faDatabase, faHandsHelping, faTachometerAlt, faFile, faUsers, faLayerGroup, faChartBar, faBrush, faPlus, faEye, faTrashAlt, faPencilAlt, faEyeSlash, faClock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faAngleDown, faRocket, faDatabase, faHandsHelping, faTachometerAlt, faFile, faUsers, faLayerGroup, faChartBar, faBrush, faPlus, faEye, faTrashAlt, faPencilAlt, faEyeSlash, faClock)
Vue.component('font-awesome-icon', FontAwesomeIcon)

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
