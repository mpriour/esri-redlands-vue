<template>
  <div id="app">
    <app-header companyName="LOLCatz" />
    <nav class="mb-2 bg-light">
      <router-link class="mr-1" to="/">Home</router-link>
      <router-link class="ml-1" to="/people">People</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import VueRouter from 'vue-router';
import AppHeader from './AppHeader.vue';
import Home from './Home.vue';
import PeopleContainer from './components/people/PeopleContainer.vue';
import PersonDetailContainer from './components/people/PersonDetailContainer.vue';

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes:[
    {path: "/people/:id", component: PersonDetailContainer, props: true},
    {path: "/people", component: PeopleContainer},
    {path: "/", component: Home},
  ]
})

export default Vue.extend({
  name: 'app',
  router: router,
  components: {
    AppHeader,
    PeopleContainer,
    PersonDetailContainer,
    Home,
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
#loading {
  display: inline-block;
  width: 50px;
  height: 50px;
  border: 3px solid rgba(255,255,255,.3);
  border-radius: 50%;
  border-top-color: rgb(50, 100, 50);
  animation: spin 1s ease-in-out infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}
</style>
