<template>
    <li class="list-group-item">
      Server #{{ server.index }}
    </li>
</template>

<script>
  export default {
    data: function () {
      return {
        server: this.serverdata
      }
    },
    props: ['serverdata']
  }
</script>

<style>

</style>
