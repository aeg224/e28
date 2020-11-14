<!--
Main component
Purpose: to manage the app's ux.
!-->

<template>
<div>
    <auth-gate v-on:isLoggedIn="isLoggedIn()" v-if="notValidated"></auth-gate>
</div>
</template>

<script>
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
