<template>
  <div class="user-component">
    <h3>{{ title }}</h3>

    <div class="user-info">
      <div class="details">
        <app-user-details :user="user"></app-user-details>
      </div>
      <div class="edit">
        <app-user-edit :userdata="user"></app-user-edit>
      </div>
    </div>
  </div>
</template>

<script>
  import UserDetails from './UserDetails.vue'
  import UserEdit from './UserEdit.vue'

  export default {
    components: {
      'app-user-details': UserDetails,
      'app-user-edit': UserEdit
    },
    data: function () {
      return {
        title: 'This is user component',
        user: {
          name: 'Irina',
          lastName: 'Antonets',
          phoneNum: '+380936034533',
          city: 'Zhytomyr'
        }
      }
    }
  }
</script>

<style scoped>
  .user-component {
    display: block;
    margin: 20px auto 0 auto;
    max-width: 800px;
    padding: 25px;
    border: 1px solid lightgray;
    border-radius: 6px;
  }

  h3 {
    margin: 5px 0 15px 0;
  }

  .user-info {
    display: flex;
  }

  .details, .edit {
    flex: 200px 1 1;
    border: 1px solid lightgray;
    border-radius: 6px;
  }

  .details {
    margin: 0 15px 0 0;
  }

</style>
