<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#1"
        ><h1>National Park Information App</h1></a
      >
      <div class="" id="navbarNavAltMarkup">
  <div class="collapse navbar-collapse" id="">
<ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      <li class="nav-item active">
          <a class="nav-item nav-link active" href="/">Park List <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
          <a class="nav-item nav-link" href="/contact">Contact Us</a>
      </li>
            <li class="nav-item">
          <a id='logoutButton' class="nav-item nav-link" v-if='validated' href="#" @click='logOut()'>Log Out</a>
      </li>
                  <li class="nav-item">
          <a class="nav-item nav-link" v-if='!validated' href="/login"  >Log In</a>
      </li>
      </ul>
            <span v-if='validated' class="navbar-text">
      Hi {{userName}}!
    </span>
        </div>

      </div>
    </nav>
  </div>
</template>

<script>
import { axios } from "@/app.js";
export default {
  props: [],
  data() {
    return {
      name: "Nav",
      validated: true,
    };
  },
  methods: {
    logOut(){
        this.$emit('log-out');
          this.$store.commit('setUser', null);
          axios.post('logout').then((response) => {
          console.log(response);
          if (!response.data.success){
              console.log(response);
          }
          this.$router.push('/exit')

      });

    },
  },
computed: {
    userName() {
        return this.$store.state.user.name;
    }
},
  mounted() {
      if (typeof(this.userName) == "undefined"){
        this.validated=false;
      }
      else{
        this.validated=true;
      }

          console.log('In NavBars Mounted Method!');
        console.log(this.userName);

  },
  
};
</script>

<style scoped>
a {
  color: red;
}
</style>
