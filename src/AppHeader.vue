<template>
  <div>
    <h1>The {{companyName}} banking system</h1>
    <small>Serving California since Monday morning</small>
    <hr>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
    props: {
        companyName: String
    }
});
</script>

<style>
</style>
