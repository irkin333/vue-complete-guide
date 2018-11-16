<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <header>
          <h1>Server Status</h1>
        </header>
      </div>
    </div>
    <hr>
    <div class="row">
      <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
          <app-server-component v-for="server in servers" v-bind:serverdata="server"></app-server-component>
        </ul>
      </div>
      <div class="col-xs-12 col-sm-6">
        <p>Server Details are currently not updated</p>
      </div>
    </div>
    <hr>
    <div class="row">
      <div class="col-xs-12">
        <footer>
          <p>All Servers are managed here</p>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {
        servers: [
          {
            index: 1
          }, {
            index: 2
          }, {
            index: 3
          }, {
            index: 4
          }, {
            index: 5
          }
        ]
      }
    }
  }
</script>

<style>

</style>
