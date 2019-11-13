<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <div class="form-practice">
          <div class="container">
            <form v-show="formIsVisible">
              <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                  <!-- Exercise 1 -->
                  <!-- Create a Signup Form where you retrieve the following Information -->
                  <!-- Full Name (First Name + Last Name) -->
                  <!-- Mail -->
                  <!-- Password -->
                  <!-- Store Data? Yes/No -->
                  <div class="form-group">
                    <label>Full Name</label>
                    <input type="text" class="form-control"
                           placeholder="Enter name"
                           v-model="user.fullName">
                  </div>
                  <div class="form-group">
                    <label>Email address</label>
                    <input type="email" class="form-control"
                           placeholder="Enter email"
                           v-model="user.email">
                  </div>
                  <div class="form-group">
                    <label>Password</label>
                    <input type="password" class="form-control"
                           placeholder="Enter pass"
                           v-model="user.password">
                  </div>
                  <div class="form-group">
                    <label>Store Data?</label>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input"
                             type="radio" name="inlineRadioOptions"
                             value="true" v-model="user.storeData">
                      <label class="form-check-label">Yes</label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input"
                             type="radio" name="inlineRadioOptions"
                             value="false" v-model="user.storeData">
                      <label class="form-check-label">No</label>
                    </div>
                  </div>

                  <!-- Exercise 2 -->
                  <!-- Only display the Form if it has NOT been submitted -->
                  <!-- Display the Data Summary ONCE the Form HAS been submitted -->
                  <div class="form-group">
                    <button class="btn btn-primary"
                            @click.prevent="submitForm()" >Submit</button>
                  </div>


                  <!-- Exercise 3 -->
                  <!-- Edit the Example from above and create a custom "Full Name" Control -->
                  <!-- which still holds the First Name and Last Name Input Field -->
                </div>
              </div>
            </form>
            <hr>
            <div class="row">
              <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                  <div class="panel-heading">
                    <h4>Your Data</h4>
                  </div>
                  <div class="panel-body">
                    <p>Full Name: {{ user.fullName }}</p>
                    <p>Mail: {{ user.email }}</p>
                    <p>Password: {{ user.password }}</p>
                    <p>Store in Database?: {{ user.storeData ? 'Yes' : 'No' }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {
        formIsVisible: true,
        user: {
          fullName: '',
          email: '',
          password: '',
          storeData: true
        }
      }
    },
    methods: {
      submitForm() {
        this.formIsVisible = !this.formIsVisible;
      }
    },
    beforeRouteLeave: (to, from, next) => {
      if(confirm('Are you sure you want to leave this page?')) {
        next();
      }
    }
  }
</script>

<style scoped>

</style>
