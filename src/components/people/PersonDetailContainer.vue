<template>
  <div>
    <div v-show="isLoading" id="loading"></div>
    <person-detail v-show="!isLoading" :person="selectedPerson"/>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Person } from "./Person";
import personDao from "./people-fetch-service";
import PersonDetail from "./PersonDetail.vue";
export default Vue.extend({
  components: {
    PersonDetail
  },
  props: {
    id: String,
    person: Object
  },
  data() {
    return {
      selectedPerson: {},
      isLoading: false,
    };
  },
  watch: {
    id: function(newId) {
      this.getPerson(newId).then(p => (this.selectedPerson = p));
    },
    person: function(p) {
      this.selectedPerson = p;
    }
  },
  methods: {
    getPerson(id: string): Promise<Person> {
      this.isLoading = true;
      if (id && id != "") {
        return personDao.getById(id).then(person => {
            this.isLoading = false;
            return person;
        });
      }
      return Promise.reject("Incorrect Arguments");
    }
  },
  created() {
    if (this.id) {
      this.getPerson(this.id).then(p => (this.selectedPerson = p));
    }
  }
});
</script>

<style>
</style>
