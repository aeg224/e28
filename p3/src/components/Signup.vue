
<template>
  <div>
    <div class="card-body">
      <div class="row">
        <div class="col-sm-6">
          <h3 class="card-title" style="text-align: left">Please Sign Up</h3>
        </div>
        <div class="col-sm-6">
          Allready Have An Acount?<button
            id="loginToggle"
            v-on:click="$emit('toggle-view')"
            type="submit"
            class="mb-3 px-3 btn btn-primary"
          >
            Log In
          </button>
        </div>
      </div>
    </div>
    <form class="mx-1 px-1">
      <div class="form-group">
        <label for="name">Name</label>
        <input
          @keyup.enter="submitRegistration"
          v-model="username"
          type="email"
          class="form-control"
          id="name"
          placeholder="Enter Name"
        />
        <small
          v-if="showNameError"
          id="errorMessage1"
          class="form-text text-danger"
          >{{ nameError }}</small
        >
      </div>
      <div class="form-group">
        <label for="email">Email address</label>
        <input
          @keyup.enter="submitRegistration"
          v-model="email"
          type="email"
          class="form-control"
          id="email"
          placeholder="Enter Email"
        />
        <small
          v-if="showEmailError"
          id="errorMessage2"
          class="form-text text-danger"
          >{{ emailError }}</small
        >
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input
          @keyup.enter="submitRegistration"
          v-model="password"
          type="password"
          class="form-control"
          id="password"
          placeholder="Password"
        />
        <small
          v-if="showPasswordError"
          id="errorMessage3"
          class="form-text text-danger"
          >{{ passwordError }}</small
        >
      </div>
    </form>
    <p class="card-text">You Must Login or Register To Use The Application.</p>
    <button
      id="submitReg"
      @click="submitRegistration()"
      type="submit"
      class="mb-3 px-3 btn btn-primary"
    >
      Submit
    </button>
  </div>
</template>
<script>
import { axios } from '@/app.js';

export default {
    data() {
        return {
            name: 'App',
            signUp: false,
            login: true,
            username: '',
            email: '',
            password: '',
            showNameError: false,
            showPasswordError: false,
            showEmailError: false,
            nameError: '',
            emailError: '',
            passwordError: ''
        }
    },
    methods: {
        submitRegistration() {
            this.resetErrors();
            this.clientSideValidation();
            if (!this.showPasswordError){
            axios.post('register', {
                name: this.username,
                email: this.email,
                password: this.password
            }).then((response) => {
                console.log(response);
                // If the registration cannot be processed, an error message is displayed
                if (!response.data.success){
                    response.data.errors.forEach(this.setServerErrors)
                }
                else{
                    this.$emit('toggle-view');
                }
            });
            }
          },
          resetErrors(){
              this.showNameError=false;
              this.showPasswordError=false;
              this.showEmailError=false;
          },
          setServerErrors(error){
                console.log(error);
                if (error.includes('name')){
                    this.nameError=error;
                    this.showNameError=true;
                }
                if (error.includes('email')){
                    this.emailError=error;
                    this.showEmailError=true;
                }
                if (error.includes('password')){
                    this.passwordError=error;
                    this.showPasswordError=true;
                }
            },

            clientSideValidation(){
                if (this.username.length < 2){
                    this.nameError="Username must be over 2 chars long";
                    this.showNameError=true;

                }
                if (this.email.indexOf('@')==-1){
                    this.emailError="The email must be over two chars and contain an @";
                    this.showEmailError=true;

                }
                if (this.password.length < 4){
                    this.passwordError="Password must be over four chars long";
                    this.showPasswordError=true;

                }
            },
            
    }
}
</script>

<style>
</style>
