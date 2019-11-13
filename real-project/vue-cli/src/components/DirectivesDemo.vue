<template>
  <div class="container">
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
</template>

<script>

  export default {
    data() {
      return { }
    },
    methods: {
      directiveTest: () => {
        console.log('Hello! Directive is clicked!')
      }
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
