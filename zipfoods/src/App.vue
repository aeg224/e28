<template>
  <div id="app">
    <img alt="ZipFoods logo" id="logo" src="@/assets/images/zipfoods-logo.png">
<nav>
    <ul>
        <li>
            <router-link
                v-for="link in links"
                v-bind:key="link"
                v-bind:to="paths[link]"
                exact
                >{{ link }}</router-link>
        </li>
    </ul>
</nav>

<router-view></router-view>

  </div>
</template>

<script>

export default {
  name: 'App',
  data: function(){
    return{
      links: ['home', 'projects', 'categories'],

      paths: {
        home: '/',
        projects: '/projects',
        categories: '/categories',
        contact: '/contact',
      },
   };
  },
}
</script>

<style lang='scss'>
@import '@/assets/scss/zipfoods.scss';
</style>
}
