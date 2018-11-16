<template>
  <div>
    <app-user></app-user>

    <div class="container">
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
  </div>
</template>

<script>
  import User from './components/User.vue';
  import Blue from './components/dynamicComponents/Blue.vue';
  import Green from './components/dynamicComponents/Green.vue';
  import Red from './components/dynamicComponents/Red.vue';

  export default {
    data() {
      return {
        activeComponent: 'appBlue'
      }
    },
    components: {
      'app-user': User,
      appBlue: Blue,
      appGreen: Green,
      appRed: Red
    }
  }
</script>

<style></style>
