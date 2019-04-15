<template>
  <div id="app">
    <app-header companyName="esri" />
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import VueRouter from 'vue-router';
import AppHeader from './AppHeader.vue';
import PeopleContainer from './components/people/PeopleContainer.vue';
import PersonDetailContainer from './components/people/PersonDetailContainer.vue';

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes:[
    {path: "/people/:id", component: PersonDetailContainer, props: true},
    {path: "/people", component: PeopleContainer},
    {path: "/", redirect: "/people"},
  ]
})

export default Vue.extend({
  name: 'app',
  router: router,
  components: {
    AppHeader,
    PeopleContainer,
    PersonDetailContainer,
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
