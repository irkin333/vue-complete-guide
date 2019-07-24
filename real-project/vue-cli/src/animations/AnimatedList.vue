<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1 class="text-center">The Animated List</h1>
      </div>
    </div>
    <hr>
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <button class="btn btn-primary" @click="showList = !showList">Toggle list</button>
        <hr>
        <transition
          @enter="enter"
          @leave="leave">
          <div class="wrapper" v-bind:style="{height: height + 'px'}" v-show="showList">
            <ul class="list-group">
              <li class="list-group-item" v-for="item in list">{{ item }}</li>
            </ul>
          </div>
        </transition>
      </div>
    </div>
    <hr>
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <div class="alert alert-info">Other content</div>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    data() {
      return {
        height: 0,
        showList: false,
        list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
      }
    },
    methods: {
      enter(el) {
        var $list = el.querySelector('.list-group');
        this.height = $list.offsetHeight;
      },
      leave(el) {
        this.height = 0;
      }
    }
  }
</script>

<style>
  .wrapper {
    overflow: hidden;
    transition: height .5s ease;
  }
  .list-group {
    height: auto;
  }
</style>

