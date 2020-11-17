<!--
Main component
Purpose: to manage the app's ux.
!-->

<template>
<body class='bg-secondary'>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
    <nav-bar></nav-bar>

  <router-view  :parks='parks' v-on:isLoggedIn="isLoggedIn()" ></router-view>
</body>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
//import { axios } from '@/app.js';

export default {

  components: {
    'nav-bar': NavBar,
  },
    data() {
      return {
        name: 'App',
        //notValidated: true,
        parks: [],
        links: ['home', ],
        paths: {
          home: '/home',
        },
      }
    },
        methods: {
          isLoggedIn(){
            console.log('logged into app');
        //    localStorage.notValidated=false;
        //    this.notValidated=false;
             // this.getParkData();
          },
/*
          getParkData(){
            console.log('getting park data');
            axios.get('https://developer.nps.gov/api/v1/parks?limit=500&api_key=be6wTQN5WMcabP51rTT9JAclkBjRb5Fhaj15L4dP').then((response) => {
              console.log(response);
              response.data.data.forEach(this.cleanData);
          });
          },
          cleanData(park){
            if (typeof park.images[0] != 'undefined'){
              this.parks.push(park);
            }
            else{
              console.log("undefined");
            }
          }
*/
        },
        mounted(){
       //   if (typeof (localStorage.notValidated) != 'undefined'){
         //   console.log('local storage is defined as '+ localStorage.notValidated)
           // this.notValidated=localStorage.notValidated;
          //  }else{
           //             console.log("local storage is not defined");

//            }
          //this.getParkData();
          //console.log("park is"+this.parks);
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
