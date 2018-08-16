new Vue({
  el: '#app',
  data: {
    title: 'Hello, world!',
    x: 0,
    y: 0
  },
  methods: {
    sayHello: function () {
      return this.title;
    },
    updateCoordinates: function (event) {
      this.x = event.clientX;
      this.y = event.clientY;
    }
  }
});