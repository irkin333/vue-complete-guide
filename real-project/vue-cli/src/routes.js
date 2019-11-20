import App from './App.vue';

/* usual bundles loading */
// import User from './components/User.vue';
// import DynamicComponent from './components/DynamicComponent.vue';
// import DirectivesDemo from './components/DirectivesDemo.vue';
// import FormPractice from './components/Forms/Form.vue';
// import FiltersMixins from './filtersMixins/FiltersMixins.vue';
// import AnimationDemo from './animations/AnimationDemo.vue';
// import AnimatedList from './animations/AnimatedList.vue';
// import HTTPDemo from './http/HTTPDemo.vue';
//import Calculator from './components/Calculator.vue';

/* lazy load of bundles */
const User = resolve => {
  require.ensure(['./components/User.vue'], () => {
    resolve(require('./components/User.vue'));
  });
};
const DynamicComponent = resolve => {
  require.ensure(['./components/DynamicComponent.vue'], () => {
    resolve(require('./components/DynamicComponent.vue'));
  });
};
const DirectivesDemo = resolve => {
  require.ensure(['./components/DirectivesDemo.vue'], () => {
    resolve(require('./components/DirectivesDemo.vue'));
  });
};
const FormPractice = resolve => {
  require.ensure(['./components/Forms/Form.vue'], () => {
    resolve(require('./components/Forms/Form.vue'));
  });
};
const FiltersMixins = resolve => {
  require.ensure(['./filtersMixins/FiltersMixins.vue'], () => {
    resolve(require('./filtersMixins/FiltersMixins.vue'));
  });
};
const AnimationDemo = resolve => {
  require.ensure(['./animations/AnimationDemo.vue'], () => {
    resolve(require('./animations/AnimationDemo.vue'));
  });
};
const AnimatedList = resolve => {
  require.ensure(['./animations/AnimatedList.vue'], () => {
    resolve(require('./animations/AnimatedList.vue'));
  });
};
const HTTPDemo = resolve => {
  require.ensure(['./http/HTTPDemo.vue'], () => {
    resolve(require('./http/HTTPDemo.vue'));
  });
};
const Calculator = resolve => {
  require.ensure(['./components/Calculator.vue'], () => {
    resolve(require('./components/Calculator.vue'));
  });
};

export const routes = [
  { path: '', component: App },
  {
    path: '/user-info',
    component: User,
    beforeEnter: (to, from, next) => {
      if(confirm('Are you sure you want to work with User?')) {
        next();
      }
    }
  },
  { path: '/dynamic-component', component: DynamicComponent },
  { path: '/directives-demo', component: DirectivesDemo },
  { path: '/forms', component: FormPractice },
  { path: '/mixins', component: FiltersMixins },
  { path: '/animation-demo', component: AnimationDemo },
  { path: '/animated-list', component: AnimatedList },
  { path: '/http-demo', component: HTTPDemo },
  { path: '/calculator', component: Calculator }
];


