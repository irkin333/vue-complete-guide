<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1 class="text-center">HTTP area</h1>
        <div class="form-group">
          <label>User Name</label>
          <input type="text" class="form-control" v-model="user.username">
        </div>
        <div class="form-group">
          <label>Mail</label>
          <input type="text" class="form-control" v-model="user.email">
        </div>
        <button class="btn btn-primary" @click="submit">Submit</button>
        <hr>
        <button class="btn btn-primary" @click="getUser">Get Data</button>
        <br>
        <ul class="list-group">
          <li class="list-group-item" v-for="u in users">{{ u.username }} - {{ u.email }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    data() {
      return {
        user: {
          username: '',
          email: ''
        },
        users: []
      }
    },
    methods: {
      submit() {
        this.$http.post('', this.user)
            .then(response => {
              console.log(response);
            }, error => {
              console.log(response);
            });
      },
      getUser() {
        this.$http.get('')
          .then(response => {
            return response.json();
          }).then(response => {
            this.users = response;
        });
      }
    }
  }
</script>

<style>

</style>

