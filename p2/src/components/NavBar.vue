<template>
  <div>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#1"><h1>NPIA - National Park Information App</h1></a>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <a class="nav-item nav-link active" href="/">Park List <span class="sr-only">(current)</span></a>
      <a class="nav-item nav-link" href="/contact">Contact Us</a>
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
                name: 'Nav',
            }
        },
        mounted(){
        }
    }
</script>

<style scoped>
a {
    color: red;
}
</style>
