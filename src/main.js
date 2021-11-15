import Vue from 'vue'
import App from './App.vue'
import store from './store'
import animated from 'animate.css'

Vue.config.productionTip = false

Vue.use(animated)

new Vue({
  render: h => h(App),
  beforeCreate () {
    Vue.prototype.$bus = this
  },
  store,
}).$mount('#app')
