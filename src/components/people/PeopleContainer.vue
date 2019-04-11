<template>
  <section>
    <label>
      <toggle-button v-model="useCache"/>&nbsp;
      <span>Use Cache?</span>
    </label>
    <people-manager :use-cache="useCache"/>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
import ToggleButton from "vue-js-toggle-button";
import PeopleManager from "./PeopleManager.vue";
Vue.use(ToggleButton);
export default Vue.extend({
    components: {
        PeopleManager
    },
    data(){
        return {
            useCache: false
        }
    }
});
</script>

<style>
</style>
