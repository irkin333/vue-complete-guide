import Vue from 'vue'
import App from './App.vue'

/* App1.vue */
//import AppServerComponent from './AppServerComponent.vue'
//Vue.component('app-server-component', AppServerComponent);
/* App1.vue end */

export const eventBus = new Vue({
  methods: {
    updateUser(user) {
      this.$emit('userUpdateEvent', user);
    }
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
});
