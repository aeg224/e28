<template>
<div>
    <p> Your One Stop Shop For Groceries In The DC Area!</p>
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