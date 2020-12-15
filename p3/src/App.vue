<template>
  <body class="bg-secondary">
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
      integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z"
      crossorigin="anonymous"
    />

    <nav-bar :key='validated'></nav-bar>

    <router-view :parks="parks" v-on:isLoggedIn="isLoggedIn()"></router-view>
  </body>
</template>

<script>
import NavBar from "@/components/NavBar.vue";

export default {
  components: {
    "nav-bar": NavBar,
  },
  data() {
    return {
      name: "App",
      parks: [],
      links: ["home"],
      paths: {
        home: "/home",
//        validated: true,
      },
    };
  },
  methods: {
    
          isLoggedIn(){
            console.log('logged into app');
      //      this.validated=true;
          },  
          validatedTrue(){
            console.log("validated Should Be True");
      //      this.validated=true;
          },
          validatedFalse(){
            console.log("Validated Should Be False!");
      //      this.validated=false;
          }  
  },
mounted() {   
    this.$store.dispatch('authUser');
},
    computed: {
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
