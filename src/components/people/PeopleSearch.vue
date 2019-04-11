<template>
  <form>
    <div class="form-group">
      <label for="name-search">Name:</label>
      <input
        id="name-search"
        type="text"
        class="form-control"
        name="name"
        v-model="name"
        @input="handleFormUpdate"
      >
    </div>
    <div class="form-group">
      <label for="city-search">City:</label>
      <input
        id="city-search"
        type="text"
        class="form-control"
        name="city"
        v-model="city"
        @input="handleFormUpdate"
      >
    </div>
    <div class="form-group">
      <label for="state-search">State:</label>
      <input
        id="state-search"
        type="text"
        class="form-control"
        name="state"
        v-model="state"
        @input="handleFormUpdate"
      >
    </div>
  </form>
</template>

<script lang="ts">
import Vue from "vue";
import { PersonCriteria } from './PersonCriteria';

export default Vue.extend({
    name: "PeopleSearch",
    data(){
        return {
            name: "",
            city: "",
            state: ""
        }
    },
    methods: {
        handleFormUpdate(event: KeyboardEvent){
            this.$emit('criteria-change', {...this.$data})
        }
    }
});
</script>

<style>
</style>
