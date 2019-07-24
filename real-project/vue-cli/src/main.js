import Vue from 'vue';
import VueResource from 'vue-resource';
import App from './App.vue';

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

Vue.directive('highlight', {
  bind(el, binding, vnode) {
    var delay = 0;
    if(binding.modifiers['delayed']) {
      delay = 3000;
    }

    setTimeout(() => {
      if(binding.arg === 'background') {
        el.style.backgroundColor = binding.value;
      } else {
        el.style.color = binding.value;
      }
    }, delay);
  }
});

Vue.filter('addLength', (value) => {
  return value + ' (' + value.length + ')';
});

Vue.use(VueResource);

new Vue({
  el: '#app',
  render: h => h(App)
});
