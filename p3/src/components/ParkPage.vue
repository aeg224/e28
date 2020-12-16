<template>
  <div class="text-light bg-dark">
    <center>
      <h2>{{ parkData.fullName }}</h2>
    </center>
    <div class="container">
      <div class="row mx-5 px-4">
        <div
          class="col"
          style="width: 25%"
          v-for="image in parkData.images"
          :key="image.url"
        >
          <a :href="image.url"
            ><img
              class=""
              style="width: 200px; padding-right: 1em"
              :src="image.url"
              alt="Card image cap"
          /></a>
        </div>
      </div>
    </div>
    <p></p>
    <h4>Description:</h4>
    {{ parkData.description }}

    <div class="container mx-5 pt-5">
      <div class="row">


        <div class="col">
          <h4> Info</h4>
          <ul>
            <li>State: {{ parkData.states }}</li>
            <li>Designation: {{ parkData.designation }}</li>
            <li>Entrance Fees: {{ parkData.entranceFees[0].cost }}</li>
            <li>Coordinates: {{ parkData.latLong }}</li>
            <li>Official Website: <a :href="parkData.url">{{ parkData.url }}</a></li>
          </ul>
        </div>

        <div class="col">
          <h4>Activities</h4>
          <ul>
            <li v-for="activity in parkData.activities" :key="activity.id">
              {{ activity.name }}
            </li>
          </ul>
        </div>


      </div>
    </div>

    <p></p>
    <h4>Weather Info:</h4>
    {{ parkData.weatherInfo }}
    <p></p>
    <h4>Directions:</h4>
    {{ parkData.directionsInfo }} For more information on directions, please
    visit: {{ parkData.directionsUrl }}
    <p></p>

    <div class="container">
      <div class="row">
        <div class="card col" style="width: 45%">
          <h3 class="card-title text-dark" style="text-align: left">
            Leave A Comment!
          </h3>

          <form class="mx-1 px-1">
            <div class="form-group">
              <label for="name">Name</label>
              <input
                v-model="username"
                type="text"
                class="form-control"
                id="name"
                placeholder="Enter Name"
              />
              <small
                v-if="showNameError"
                id="errorMessage"
                class="form-text text-danger"
                >{{ nameError }}</small
              >
            </div>
            <div class="form-group">
              <label for="comment">Email address</label>
              <textarea
                v-model="comment"
                type="text"
                class="form-control"
                id="comment"
                rows="5"
                placeholder="Enter Comment"
              ></textarea>
              <small
                v-if="showCommentError"
                id="errorMessage"
                class="form-text text-danger"
                >{{ commentError }}</small
              >
            </div>
          </form>
          <p class="card-text">
            You Must Login or Register To Use The Application.
          </p>
          <button
            @click="submitComment()"
            type="submit"
            class="mb-3 px-3 btn btn-primary"
            id='submitComment'
          >
            Submit
          </button>
        </div>

        <div class="col card text-dark" style="width: 18rem">
          <ul class="list-group list-group-flush">
            <li
              class="list-group-item"
              v-for="comment in parkComments"
              :key="comment.id"
            >
              <span id='commentName'>{{ comment.name }}</span> comment : {{ comment.comment }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { axios } from "@/app.js";
import { axios_nps_api } from "@/app.js";
export default {
  components: {},
  props: ["id"],
  data() {
    return {
      name: "App",
      notValidated: true,
      parkId: "",
      parkData: [],
      index: 0,
      comment: "",
      username: "",
      nameError: "",
      commentError: "",
      showNameError: false,
      showCommentError: false,
      parkComments: [],
    };
  },
  methods: {
    isLoggedIn() {
      console.log("logged in app");
      this.notValidated = false;
      this.$emit("isLoggedIn");
    },
    submitComment() {
      this.resetErrors();
      axios
        .post("comments", {
          name: this.username,
          comment: this.comment,
          parkId: this.id,
        })
        .then((response) => {
          console.log(response);

          // If the comment cannot be processed, an error message is displayed
          if (!response.data.success) {
            this.setErrors(response.data.errors);
          } else {
            this.parkComments.push({
              name: this.username,
              comment: this.comment,
            });
          }
        });
    },
    setErrors(error) {
      console.log(error);
      if (typeof error.name != "undefined") {
        this.nameError = error.name[0];
        this.showNameError = true;
      }
      if (typeof error.comment != "undefined") {
        this.commentError = error.comment[0];
        this.showCommentError = true;
      }
    },
    resetErrors() {
      this.showNameError = false;
      this.showCommentError = false;
    },
    getParkComments() {
      console.log("getting comments");
      axios.get("comments").then((response) => {
        response.data.comments.forEach(this.cleanComments);
      });
    },
    cleanComments(comment) {
      console.log(comment);
      if (comment.parkId == this.id) {
 //       console.log(comment.parkId);
        this.parkComments.push(comment);
      }
    },
    getParkData() {
      console.log("getting park data");
      axios_nps_api
        .get(
          "https://developer.nps.gov/api/v1/parks?parkCode=" +
            this.id +
            "&api_key=be6wTQN5WMcabP51rTT9JAclkBjRb5Fhaj15L4dP"
        )
        .then((response) => {
          console.log(response);
          this.parkData = response.data.data[0];
//          console.log(this.parkData);
        });
    },
  },
  mounted() {
    this.getParkData();
    this.getParkComments();
  },
  computed: {
    parkComments2() {
      this.getParkComments();
      return this.parkComments;
    },
  },
};
</script>

<style>
</style>
