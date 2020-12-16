<template>
  <div>
     <div>
      <h3>
        {{ LIMIT }} Results Per Page:
        <button id='1' @click="changeResults(1)">1</button
        ><button id='2' @click="changeResults(2)">2</button
        ><button id='3' @click="changeResults(3)">3</button
        ><button id='4' @click="changeResults(4)">4</button
        ><button id='5' @click="changeResults(5)">5</button
        ><button id='6' @click="changeResults(6)">6</button
        ><button id='7' @click="changeResults(7)">7</button
        ><button id='8' @click="changeResults(8)">8</button
        ><button id='9' @click="changeResults(9)">9</button
        ><button id='10' @click="changeResults(10)">10</button>
        <button id='11' @click="changeResults(11)">11</button
        ><button id='12' @click="changeResults(12)">12</button
        ><button id='13' @click="changeResults(13)">13</button
        ><button id='14' @click="changeResults(14)">14</button
        ><button id='15' @click="changeResults(15)">15</button
        ><button id='16' @click="changeResults(16)">16</button
        ><button id='17' @click="changeResults(17)">17</button
        ><button id='18' @click="changeResults(18)">18</button
        ><button id='19' @click="changeResults(19)">19</button
        ><button id='20' @click="changeResults(20)">20</button>
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
import { axios_nps_api } from "@/app.js";

export default {
  props: [],
  components: {
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
    };
  },
  methods: {
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
      this.$store.commit('setPageNum', num);
      console.log('page num is '+ this.pageNum)
      this.page = num;
      this.getParkData();
    },
    signOut() {
      console.log("logged in is now" + this.is);
    },
  },
  mounted() {
    console.log("page num is is");
    console.log(this.pageNum);
    this.page = this.pageNum;
    this.getParkData();
  },
  computed: {
    pageNum(){
      return this.$store.state.pageNum;
    }
  },
};
</script>

<style>
[v-cloak] {
  display: none;
}
</style>
