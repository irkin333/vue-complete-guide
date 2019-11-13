import App from './App.vue';
import User from './components/User.vue';
import DynamicComponent from './components/DynamicComponent.vue';
import DirectivesDemo from './components/DirectivesDemo.vue';
import FormPractice from './components/Forms/Form.vue';
import FiltersMixins from './filtersMixins/FiltersMixins.vue';
import AnimationDemo from './animations/AnimationDemo.vue';
import AnimatedList from './animations/AnimatedList.vue';
import HTTPDemo from './http/HTTPDemo.vue';

export const routes = [
  { path: '', component: App },
  { path: '/user-info', component: User },
  { path: '/dynamic-component', component: DynamicComponent },
  { path: '/directives-demo', component: DirectivesDemo },
  { path: '/forms', component: FormPractice },
  { path: '/mixins', component: FiltersMixins },
  { path: '/animation-demo', component: AnimationDemo },
  { path: '/animated-list', component: AnimatedList },
  { path: '/http-demo', component: HTTPDemo }
];


