new Vue({
  el: '#exercise1',
  data: {
    name: 'Irina',
    age: 27,
    src: 'https://d3i6fh83elv35t.cloudfront.net/newshour/app/uploads/2017/03/cat-tongue_AdobeStock_70141743-1024x719.jpeg'
  }
});

new Vue({
  el: '#exercise2',
  data: {
    value: ''
  },
  methods: {
    alertMethod: function () {
      alert('Alert!');
    },
    saveValue: function (event) {
      this.value = event.target.value;
    }
  }
});

new Vue({
  el: '#exercise3',
  data: {
    value: 0
  },
  computed: {
    result: function () {
      return this.value != 37 ? 'not there yet' : 'done';
    }
  },
  watch: {
    value: function (val) {
      var vm = this;
      setTimeout(function () {
        vm.value = 0;
      }, 5000);
    }
  },
  methods: {

  }
});

new Vue({
  el: '#exercise4',
  data: {
    effect: ''
  },
  computed: {

  },
  watch: {

  },
  methods: {
    startEffect: function () {
      var vm = this;
      setInterval(function () {
        vm.effect = vm.effect == 'highlight' ? 'shrink' : 'highlight';
      }, 5000);
    },
    startProgress: function () {
      
    }
  }
});