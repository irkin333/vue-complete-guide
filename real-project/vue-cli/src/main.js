import Vue from 'vue'
import App from './App.vue'
import AppServerComponent from './AppServerComponent.vue'

Vue.component('app-server-component', AppServerComponent);

new Vue({
  el: '#app',
  render: h => h(App)
})
