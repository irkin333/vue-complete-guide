new Vue({
  el: '#app',
  data: {
    game: false,
    player: 100,
    monster: 100,
    logs: []
  },
  watch: {
    game: function (value) {
      if(value) {
        this.player = 100;
        this.monster = 100;
        this.logs = [];
      }
    },
    player: function (newVal, oldVal) {
      this.logs.push({
        style: 'monster-turn',
        text: 'MONSTER HITS PLAYER FOR ' + (oldVal - newVal)
      });
    },
    monster: function (newVal, oldVal) {
      this.logs.push({
        style: 'player-turn',
        text: 'PLAYER HITS MONSTER FOR ' + (oldVal - newVal)
      });
    }
  },
  methods: {
    attack: function (special) {
      if(special) {
        this.player = this.player - (Math.random() * 20).toFixed();
        this.monster = this.monster - (Math.random() * 20).toFixed();
        return
      }
      this.player = this.player - (Math.random() * 10).toFixed();
      this.monster = this.monster - (Math.random() * 10).toFixed();
    },
    heal: function  () {
      this.player = this.player - (Math.random() * 10).toFixed();
      this.player += 10;

      this.logs.push({
        style: 'player-turn',
        text: 'PLAYER HEALS HIMSELF FOR ' + 10
      });
    }
  }
});