<!--
Main component
Purpose: to manage the app's ux.
!-->

<template>
<div>
  <button class='text-right"' @click="signOut"> Signs Out</button>
    <auth-gate v-on:isLoggedIn="isLoggedIn()" v-if="notValidated"></auth-gate>
    <div v-if="!notValidated">

      <h3>{{LIMIT}} Results Per Page: <button @click='changeResults(1)'>1</button><button @click='changeResults(2)'>2</button><button @click='changeResults(3)'>3</button><button @click='changeResults(4)'>4</button><button @click='changeResults(5)'>5</button><button @click='changeResults(1)'>6</button><button @click='changeResults(2)'>7</button><button @click='changeResults(3)'>8</button><button @click='changeResults(4)'>9</button><button @click='changeResults(5)'>10</button> </h3>
    <div class='container'>
    <div class='row mx-5 px-4'>
          <div class="col-sm" v-for="park in parks" :key="park.parkCode">
          <div class="card" style="width: 200px; height: 98%;">
            <img class="card-img-top" :src=park.images[0].url style="width: 200px;" alt="Card image cap">
            <div class="card-body flex-column d-flex">
              <h5 class="card-title">{{park.name}}</h5>
              <p class="card-text">{{park.fullName}}</p>
              <a :href="'/parks/'+park.parkCode" class="btn btn-primary mt-auto">More Info</a>
            </div>
            </div>
            </div>
        </div>
    </div>
    </div>
</div>
</template>

<script>
import AuthGate from '@/components/AuthGate.vue'
import { axios } from '@/app.js';

export default {
  props: [],
  components: {
    'auth-gate': AuthGate
  },
    data() {
      return {
        name: 'App',
        parks: [],
        notValidated: false,  
        page: 1,
      //  notValidated:true,
        parksWithLimit: [],
        loggedIn: false,
        LIMIT: 50,
        START: 0,
      }
        },
        methods: {
          isLoggedIn(){
            this.getParkData();
          },
          
          getParkData(){
            this.parks = [];
            console.log('getting park data');
            if (this.page > 1 ){
              this.START=((this.page-1)*50);
            }else{
              this.START=0;
            }
            axios.get('https://developer.nps.gov/api/v1/parks?limit='+this.LIMIT+'&start='+this.START+'&api_key=be6wTQN5WMcabP51rTT9JAclkBjRb5Fhaj15L4dP').then((response) => {
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
          },
          changeResults(num){
            this.page=num;
            this.getParkData();
          },
          signOut(){
            console.log("logged in is now"+this.is);
          }
        },
        mounted(){
          this.getParkData();
        },
        computed: {

        }
}
</script>

<style>

</style>
