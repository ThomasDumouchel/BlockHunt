import Vue from 'vue'
import App from './App.vue'
import * as VueGoogleMaps from "vue2-google-maps" // Import package
import vuetify from './plugins/vuetify'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'
import router from './router'

Vue.config.productionTip = false
Vue.use(VueGoogleMaps, {
  load: { 
    key: process.env.VUE_APP_GOOGLE_MAPS_API_KEY,
    libraries: "places"
  }
});

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
