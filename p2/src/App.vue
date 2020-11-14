<!--
Main component
Purpose: to manage the app's ux.
!-->

<template>
<body class='bg-secondary'>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
    <nav-bar :notValidated='notValidated'></nav-bar>
    <auth-gate v-on:isLoggedIn="isLoggedIn()" v-if="notValidated"></auth-gate>
  </body>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import AuthGate from '@/components/AuthGate.vue'

export default {

  components: {
    'nav-bar': NavBar,
    'auth-gate': AuthGate
  },
    data() {
      return {
        name: 'App',
        notValidated: true,  
      }
        },
        methods: {
          isLoggedIn(){
            console.log('logged in app');
            this.notValidated=false;
          }
        }
}
</script>

<style>
body, html {
  min-height: 100vh;
  }
h1{
  color: green;
}

</style>
