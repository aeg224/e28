<template>
  <div>
    <div v-if='validated'><auth-gate v-on:logIn="logIn()"></auth-gate></div>

    <div v-if='!validated'>

      Hi {{ }}

      <button @click='addFavorite()'>Add Favorite</button>
      <button @click='removeFavorite()'>Remove Favorite</button>

      <h3>
        {{ LIMIT }} Results Per Page:
        <button @click="changeResults(1)">1</button
        ><button @click="changeResults(2)">2</button
        ><button @click="changeResults(3)">3</button
        ><button @click="changeResults(4)">4</button
        ><button @click="changeResults(5)">5</button
        ><button @click="changeResults(6)">6</button
        ><button @click="changeResults(7)">7</button
        ><button @click="changeResults(8)">8</button
        ><button @click="changeResults(9)">9</button
        ><button @click="changeResults(10)">10</button>
        <button @click="changeResults(11)">11</button
        ><button @click="changeResults(12)">12</button
        ><button @click="changeResults(13)">13</button
        ><button @click="changeResults(14)">14</button
        ><button @click="changeResults(15)">15</button
        ><button @click="changeResults(16)">16</button
        ><button @click="changeResults(17)">17</button
        ><button @click="changeResults(18)">18</button
        ><button @click="changeResults(19)">19</button
        ><button @click="changeResults(20)">20</button>
      </h3>
      <div class="container">
        <div class="row mx-5 px-4">
          <div class="col-sm" v-for="park in parks" :key="park.parkCode">
            <div class="card" style="width: 200px; height: 98%">
              <img
                class="card-img-top"
                :src="park.images[0].url"
                style="width: 200px"
                alt="Card image cap"
              />
              <div class="card-body flex-column d-flex">
                <h5 class="card-title">{{ park.name }}</h5>
                <p class="card-text">{{ park.fullName }}</p>
                <a
                  :href="'/parks/' + park.parkCode"
                  class="btn btn-primary mt-auto"
                  >More Info</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    <h3>
      {{ LIMIT }} Results Per Page:
        <button @click="changeResults(1)">1</button
        ><button @click="changeResults(2)">2</button
        ><button @click="changeResults(3)">3</button
        ><button @click="changeResults(4)">4</button
        ><button @click="changeResults(5)">5</button
        ><button @click="changeResults(6)">6</button
        ><button @click="changeResults(7)">7</button
        ><button @click="changeResults(8)">8</button
        ><button @click="changeResults(9)">9</button
        ><button @click="changeResults(10)">10</button>
        <button @click="changeResults(11)">11</button
        ><button @click="changeResults(12)">12</button
        ><button @click="changeResults(13)">13</button
        ><button @click="changeResults(14)">14</button
        ><button @click="changeResults(15)">15</button
        ><button @click="changeResults(16)">16</button
        ><button @click="changeResults(17)">17</button
        ><button @click="changeResults(18)">18</button
        ><button @click="changeResults(19)">19</button
        ><button @click="changeResults(20)">20</button>
    </h3>
    </div>
  </div>
</template>

<script>
import { axios } from "@/app.js";
import { axios_nps_api } from "@/app.js";

import AuthGate from "@/components/AuthGate.vue";


export default {
  props: [],
  components: {
    "auth-gate": AuthGate
  },
  data() {
    return {
      name: "App",
      parks: [],
      page: 1,
      parksWithLimit: [],
      loggedIn: false,
      LIMIT: 25,
      START: 0,
      validated: true,
    };
  },
  methods: {
    isLoggedIn() {
      this.getParkData();
    },
    logIn(){
      console.log('logged in');
      this.validated=false;
    },
    addFavorite(){

          axios.post('http://e28-api.aeg224.loc/favorite', {
                product_id: 5,
            }).then((response) => {
                console.log(response.data.success);

                if (response.data.success){
                    console.log(response.data);
                    console.log("should add");
                }
                else{
                    console.log(response.data.errors);
                    console.log("bad input");
                    response.data.errors.forEach(this.setErrors);
                }
            });

    },
    removeFavorite(){
          axios.delete('http://e28-api.aeg224.loc/favorite/5').then((response) => {
                console.log(response.data.success);

                if (response.data.success){
                    console.log(response.data);
                    console.log("should add");
                }
                else{
                    console.log(response.data.errors);
                    console.log("bad input");
                    response.data.errors.forEach(this.setErrors);
                }
            });

    },

// Makes the API Call to the NPS API
    getParkData() {
      this.parks = [];
      console.log("getting park data");
      if (this.page > 1) {
        this.START = (this.page - 1) * this.LIMIT;
      } else {
        this.START = 0;
      }
      axios_nps_api
        .get(
          "https://developer.nps.gov/api/v1/parks?limit=" +
            this.LIMIT +
            "&start=" +
            this.START +
            "&api_key=be6wTQN5WMcabP51rTT9JAclkBjRb5Fhaj15L4dP"
        )
        .then((response) => {
          response.data.data.forEach(this.cleanData);
        });
    },
    cleanData(park) {
      if (typeof park.images[0] != "undefined") {
        this.parks.push(park);
      } else {
        console.log("undefined");
      }
    },

// Updates the Parks according to the button pressed
    changeResults(num) {
      console.log("this.page is now " + num);
      this.page = num;
      this.getParkData();
    },
    signOut() {
      console.log("logged in is now" + this.is);
    },
  },
  mounted() {
    this.getParkData();
    console.log('calling auth to determine validation')
      axios.post('http://e28-api.aeg224.loc/auth', {
            }).then((response) => {
                console.log(response.data);
                if (response.data.authenticated){
                    this.validated=false;
                }
                else{
                    console.log(response.data.authenticated);
                    console.log("bad input");
                    response.data.errors.forEach(this.setErrors);
                    this.validated=true;
                }
            });
            console.log('validated is :')
            console.log(this.validated);

  },
  computed: {},
};
</script>

<style>
</style>
