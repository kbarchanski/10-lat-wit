import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'

// import styles
import './styles/styles.scss'

Vue.use(BootstrapVue)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
