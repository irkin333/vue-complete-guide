<template>
  <div class="user-edit">
    <h3>Edit</h3>
    <p>
      <input type="text" v-model="userModel.name">
    </p>
    <p>
      <input type="text" v-model="userModel.lastName">
    </p>
    <p>
      <input type="text" v-model="userModel.phoneNum">
    </p>
    <p>
      <input type="text" v-model="userModel.city">
    </p>
    <p>
      <button @click="applyChanges()">Apply changes</button>
      <button @click="resetData()">Reset data</button>
    </p>
  </div>
</template>

<script>
  import {eventBus} from '../main.js';

  export default {
    data: function () {
      let User = {...this.userdata};

      return {
        userModel: User
      }
    },
    props: ['userdata'],
    methods: {
      applyChanges() {
        eventBus.updateUser(this.userModel);
      },
      resetData() {
        this.userModel = {...this.userdata};
        eventBus.updateUser(this.userModel);
      }
    }
  }
</script>

<style scoped>
  .user-edit {
    display: inline-block;
    width: 100%;
    height: 100%;
    background-color: #ffb9a7;
    padding: 15px;
    border-radius: 6px;
  }

  h3 {
    margin: 5px 0;
  }

  input {
    border: 1px solid deeppink;
    border-radius: 4px;
    padding: 3px 15px;
  }

  button {
    border-radius: 4px;
    cursor: pointer;
    color: #ffffff;
    background-color: darkred;
    padding: 10px 20px;
    border: none;
  }

  button:focus, input:focus {
     outline: none;
  }
</style>
