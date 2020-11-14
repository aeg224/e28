
<template>
  <div>
    <center>
      <div class="card mt-5" style="width: 75vw; height: 50vh">
        <log-in v-if="login" v-on:toggle-view="toggleView()"></log-in>
        <sign-up v-if="signUp" v-on:toggle-view="toggleView()"></sign-up>

        <p class="card-text">
          Please Login or Register To Use The Application.
        </p>
        <button type="submit" class="mb-3 px-3 btn btn-primary">Submit</button>
      </div>
    </center>
  </div>
</template>

<script>
import Login from "@/components/Login.vue";
import Signup from "@/components/Signup.vue";

export default {
  components: {
    "log-in": Login,
    "sign-up": Signup,
  },
  data() {
    return {
      name: "App",
      signUp: true,
      login: false,
    };
  },
  methods: {
    toggleView() {
      console.log(this.login);
      console.log("inside toggle");
      if (this.login == true) {
        console.log("inside if");
        this.login = false;
      } else {
        console.log("inside else");
        this.login = true;
      }
      if (this.signUp == true) {
        console.log("inside if");
        this.signUp = false;
      } else {
        console.log("inside else");
        this.signUp = true;
      }
    },
  },
};
</script>

<style>
body,
html {
  min-height: 100vh;
}
h1 {
  color: green;
}
</style>
