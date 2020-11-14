<!--

!-->


<template>
  <div>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#1"><h1>NPIA - National Park Information App</h1></a>
  <div v-if='!notValidated' class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <a class="nav-item nav-link active" href="#2">Home <span class="sr-only">(current)</span></a>
      <a class="nav-item nav-link" href="#3">Park List</a>
      <a class="nav-item nav-link" href="#4">Contact Us</a>
    </div>
  </div>
</nav>
</div>
</template>

<script>
export default {
        props : ['notValidated'],
        data() {
            return {
                //validated: true,
                name: 'Nav',
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
    color: red;
}
</style>
