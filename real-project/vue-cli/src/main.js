import Vue from 'vue';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import App from './App.vue';
import { routes } from './routes.js';

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
Vue.http.options.root = 'https://vue-http-test-cedb8.firebaseio.com/data.json';
Vue.http.interceptors.push((request, next) => {
  /** request interceptor */
  request.isIntercepted = true;
  console.log(request);

  /** response interceptor */
  next(response => {
    response.responseIsIntercepted = true;
  });
});

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
