<!--

!-->
<template>
<div>
    <div class="card-body">

<div class="row">
  <div class="col-sm-6">

    <h3 class="card-title" style="text-align: left;">Please Log In</h3>
</div>
  <div class="col-sm-6">
    Don't Have An Acount?<button v-on:click="$emit('toggle-view')" type="submit" class=" mb-3 px-3 btn btn-primary">Sign Up</button>
</div></div>
        </div>

        <form class='mx-1 px-1'>
        <div class="form-group">
            <label for="email">Email address</label>
            <input v-model='username' type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email">
            <small v-if='showEmailError' id="errorMessage" class="form-text text-danger">{{emailError}}</small>
        </div>
        <div class="form-group">
            <label for="password">Password</label>
            <input v-model='password' type="password" class="form-control" id="password" placeholder="Password">
            <small v-if='showPasswordError' id="errorMessage" class="form-text text-danger">{{passwordError}}</small>
            <small v-if='showCredentialError' id="errorMessage" class="form-text text-danger">{{credentialError}}</small>
        </div>

        </form>
                <p class="card-text">
          Please Login or Register To Use The Application.
        </p>
        <button @click=checkLogin() type="submit" class="mb-3 px-3 btn btn-primary">Submit</button>


</div>
</template>

<script>
  import { axios } from '@/app.js';

export default {

        data() {
        return {
            username: '',
            password: '',
            showEmailError: false,
            showPasswordError: false,
            showCredentialError: false,
            emailError: '',
            passwordError: '',
            credentialError: ''
        }
    },
    methods: {
        checkLogin() {
            this.resetErrors();
            axios.post('login', {
                email: this.username,
                password: this.password
            }).then((response) => {
                console.log(response.data.success);

                if (response.data.success){
                    console.log(response.data.success);
                    console.log("should log in");
                    this.$emit('loggedIn');
                }
                else{
                    console.log(response.data.errors);
                    console.log("bad input");
                    response.data.errors.forEach(this.setErrors);
                }
            });
          },
          resetErrors(){
              this.showPasswordError=false;
              this.showEmailError=false;
          },

          setErrors(error){
                console.log(error);
                if (error.includes('email')){
                    this.emailError=error;
                    this.showEmailError=true;
                }
                if (error.includes('password')){
                    this.passwordError=error;
                    this.showPasswordError=true;
                }
                if (error.includes('credentials')){
                    this.credentialError=error;
                    this.showCredentialError=true;
                }
            },
    }
}
</script>

<style>


</style>
