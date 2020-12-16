<template>
  <div>
    <br />
    <p>We Want To Hear From You!</p>
    <div class="card col" style="width: 80%; margin: auto">
      <h3 class="card-title text-dark" style="text-align: left">
        Send Us A Message With The Form Below
      </h3>

      <form class="mx-1 px-1">
        <div class="form-group">
          <label for="name">Name</label>
          <input
            v-model="userName"
            type="email"
            class="form-control"
            id="name"
            placeholder="Enter Name"
          />
          <small
            v-if="showNameError"
            id="errorMessage1"
            class="form-text text-danger"
            >{{ nameError }}</small
          >
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input
            v-model="userEmail"
            type="email"
            class="form-control"
            id="email"
            placeholder="Enter Email"
          />
          <small
            v-if="showEmailError"
            id="errorMessage2"
            class="form-text text-danger"
            >{{ emailError }}</small
          >
        </div>
        <div class="form-group">
          <label for="message">Message</label>
          <textarea
            v-model="userMessage"
            type="text"
            class="form-control"
            id="Message"
            rows="5"
            placeholder="Enter Message"
          ></textarea>
          <small
            v-if="showMessageError"
            id="errorMessage3"
            class="form-text text-danger"
            >{{ messageError }}</small
          >
        </div>
      </form>
      <button
        @click="submitMessage()"
        type="submit"
        class="mb-3 px-3 btn btn-primary"
        id='submitContact'
      >
        Submit
      </button>
    </div>
    <center>
      <h1 v-if="messageSent" class="text-success">
        Thank You For Your Message. We Will Respond ASAP.
      </h1>
    </center>
  </div>
</template>

<script>
import { axios } from "@/app.js";

export default {
  props: [],
  data() {
    return {
      name: "Contact",
      nameError: "",
      messageError: "",
      emailError: "",
      showNameError: false,
      showEmailError: false,
      showMessageError: false,
      userMessage: "",
      userEmail: "",
      userName: "",
      messageSent: false,
    };
  },
  methods: {
    submitMessage() {
      this.resetErrors();
      this.clientSideValidation();

      if (!this.showMessageError) {
        axios
          .post("contactForm", {
            name: this.userName,
            email: this.userEmail,
            message: this.userMessage,
          })
          .then((response) => {
            console.log(response);

            // If the comment cannot be processed, an error message is displayed
            if (!response.data.success) {
              this.setErrors(response.data.errors);
            } else {
              console.log("succesfully updated");
              this.messageSent = true;
              this.resetForm();
            }
          });
      }
    },
    resetErrors() {
      this.showNameError = false;
      this.showEmailError = false;
      this.showMessageError = false;
    },
    setErrors(error) {
      console.log(error);
      if (typeof error.name != "undefined") {
        this.nameError = error.name[0];
        this.showNameError = true;
      }
      if (typeof error.email != "undefined") {
        this.emailError = error.email[0];
        this.showEmailError = true;
      }
      if (typeof error.message != "undefined") {
        this.messageError = error.message[0];
        this.showMessageError = true;
      }
    },
    resetForm() {
      this.userMessage = "";
      this.userEmail = "";
      this.userName = "";
    },

    clientSideValidation() {
      if (this.userName.length < 2) {
        this.nameError = "Username must be over 2 chars long";
        this.showNameError = true;
      }
      if (this.userEmail.indexOf("@") == -1) {
        this.emailError = "The email must be over two chars and contain an @";
        this.showEmailError = true;
      }
      if (this.userMessage.length < 10) {
        this.messageError = "Message must be over ten chars long";
        this.showMessageError = true;
      }
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
