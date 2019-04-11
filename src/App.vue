<template>
  <div id="app">
    <app-header companyName="esri" />
    <people-container />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import AppHeader from './AppHeader.vue';
import PeopleContainer from './components/people/PeopleContainer.vue';

export default Vue.extend({
  name: 'app',
  components: {
    AppHeader,
    PeopleContainer
  }
})
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
