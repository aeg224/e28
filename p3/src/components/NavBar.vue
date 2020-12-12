<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#1"
        ><h1>NPIA - National Park Information App</h1></a
      >
      <div class="" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a class="nav-item nav-link active" href="/">Park List <span class="sr-only">(current)</span></a>
          <a class="nav-item nav-link" href="/contact">Contact Us</a>
          <a class="nav-item nav-link" href="#" @click='logOut()'>Log Out</a>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { axios } from "@/app.js";
export default {
  props: ["notValidated"],
  data() {
    return {
      name: "Nav",
    };
  },
  methods: {
    logOut(){
      axios.post('http://e28-api.aeg224.loc/logout').then((response) => {
          console.log(response);
          // If the registration cannot be processed, an error message is displayed

          if (!response.data.success){
              console.log(response);
          }
      });

    },
  },
  mounted() {},
};
</script>

<style scoped>
a {
  color: red;
}
</style>
