<template>
  <div class="user-details">
    <h3>Details</h3>
    <p>User Name: {{ user.name }}</p>
    <p>User Last Name: {{ user.lastName }}</p>
    <p>User Phone Number: {{ user.phoneNum }}</p>
    <p>User City: {{ user.city }}</p>
  </div>
</template>

<script>
  import {eventBus} from '../main.js';

  export default {
    data: function () {
      return {

      };
    },
    props: ['user'],
    created() {
      eventBus.$on('userUpdateEvent', (user) => {
        this.user = {...user};
      });
    }
  }
</script>

<style scoped>
  .user-details {
    display: inline-block;
    width: 100%;
    background-color: #a1ffdb;
    padding: 15px;
    border-radius: 6px;
    height: 100%;
  }

  h3 {
    margin: 5px 0;
  }
</style>
