<template>
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
</template>

<script>

  import Blue from './dynamicComponents/Blue.vue';
  import Green from './dynamicComponents/Green.vue';
  import Red from './dynamicComponents/Red.vue';

  export default {
    data() {
      return {
        activeComponent: 'appBlue'
      }
    },
    components: {
      appBlue: Blue,
      appGreen: Green,
      appRed: Red,
    }
  }
</script>
