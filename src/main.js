import Vue from 'vue'
import App from './App.vue'
import * as VueGoogleMaps from "vue2-google-maps" // Import package
import vuetify from './plugins/vuetify'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'
import router from './router'
// require('dotenv').config()
Vue.config.productionTip = false

Vue.use(VueGoogleMaps, {
  load: {
    // key: process.env.GOOGLE_MAPS_API_KEY,
    key: "AIzaSyDXA185rJGdsj2xWFDf5bv1hqP73qvCDuU",
    libraries: "places"
  }
});

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
