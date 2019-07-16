<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <br>
          <button class="btn btn-default" @click="activePage = 'user-info'">User Component</button>
          <button class="btn btn-default" @click="activePage = 'dynamic-template'">Dynamic Template</button>
          <button class="btn btn-default" @click="activePage = 'forms'">Forms</button>
          <button class="btn btn-default" @click="activePage = 'directives'">Directives</button>
          <button class="btn btn-default" @click="activePage = 'mixins'">Filters & Mixins</button>
          <button class="btn btn-default" @click="activePage = 'animations'">Filters & Mixins</button>
          <hr>
        </div>
      </div>
    </div>

    <app-user v-show="activePage == 'user-info'"></app-user>

    <div class="container" v-show="activePage == 'dynamic-template'">
      <div class="row">
        <div class="col-xs-12">
          <br>
          <button class="btn btn-primary" @click="activeComponent = 'appBlue'">Load Blue Template</button>
          <button class="btn btn-success" @click="activeComponent = 'appGreen'">Load Green Template</button>
          <button class="btn btn-danger" @click="activeComponent = 'appRed'">Load Red Template</button>
          <hr>
          <component :is="activeComponent"></component>
        </div>
      </div>
    </div>

    <div class="container" v-show="activePage == 'forms'">
      <div class="row">
        <div class="col-xs-12">
          <form-practice></form-practice>
        </div>
      </div>
    </div>

    <div class="container" v-show="activePage == 'directives'">
      <div class="row">
        <div class="col-xs-12">
          <h3>Custom directive</h3>
          <div v-highlight:background.delayed="'red'">Highlight custom directive</div>
          <div v-local-highlight:color.delayed.blink="{mainColor: 'red', secondColor: 'green', delay: 500}">Local highlight custom directive</div>
        </div>
      </div>
      <hr>
      <div class="row">
        <div class="col-xs-12">
          <h3>Home directive</h3>
          <div v-myon:click="directiveTest">Myon custom directive</div>
        </div>
      </div>
    </div>

    <app-filters-mixins v-show="activePage == 'mixins'"></app-filters-mixins>

    <app-animation-demo v-show="activePage == 'animations'"></app-animation-demo>
  </div>
</template>

<script>
  import User from './components/User.vue';
  import Blue from './components/dynamicComponents/Blue.vue';
  import Green from './components/dynamicComponents/Green.vue';
  import Red from './components/dynamicComponents/Red.vue';

  import Form from './components/Forms/Form.vue';
  import FiltersMixins from './filtersMixins/FiltersMixins.vue';
  import AnimationDemo from './animations/AnimationDemo.vue';

  export default {
    data() {
      return {
        activeComponent: 'appBlue',
        activePage: 'mixins'
      }
    },
    methods: {
      directiveTest: () => {
        console.log('Hello! Directive is clicked!')
      }
    },
    components: {
      'app-user': User,
      appBlue: Blue,
      appGreen: Green,
      appRed: Red,
      'form-practice': Form,
      appFiltersMixins: FiltersMixins,
      appAnimationDemo: AnimationDemo
    },
    directives: {
      'local-highlight': {
        bind(el, binding, vnode) {
          console.log('hello 1')
          var delay = 0;
          if(binding.modifiers['delayed']) {
            delay = 3000;
          }

          if(binding.modifiers['blink']) {
            let mainColor = binding.value.mainColor;
            let secondColor = binding.value.secondColor;
            let currentColor = mainColor;
            setTimeout(() => {
              setInterval(() => {
                currentColor = currentColor === secondColor ? mainColor : secondColor;
                if(binding.arg === 'color') {
                  el.style.color = currentColor;
                }
              }, binding.value.delay);
            }, delay);
          } else {
            setTimeout(() => {
              if(binding.arg === 'color') {
                el.style.color = binding.value;
              }
            }, delay);
          }
        }
      },
      'myon': {
        bind(el, binding) {
          el.addEventListener(binding.arg, binding.value);
        }
      }
    }
  }
</script>

<style></style>
