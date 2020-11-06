<template>
<div>
    <p> Please Take A Look At Some Of My Projects Listed Below!</p>
    <show-featured :category='"vegetables"'></show-featured>
</div>
</template>

<script>
import ShowFeatured from '@/components/ShowFeatured.vue';

export default {
    name: '',
    components: {
    'show-featured': ShowFeatured,
  },


};
</script>

<style>
</style>