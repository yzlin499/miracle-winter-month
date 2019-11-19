import Vue from 'vue'
import App from './App.vue'
import 'jquery'
import "bootstrap3/dist/css/bootstrap.css"
import "bootstrap3/dist/js/bootstrap.min"

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
