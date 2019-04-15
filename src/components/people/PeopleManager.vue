<template>
  <div class="row">
    <div class="col-4">
      <people-search @criteria-change="handleChange"/>
    </div>
    <div class="col">
      <people-list :people="people" @row-click="showPersonDetail"/>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import * as _ from "lodash";
import PeopleSearch from "./PeopleSearch.vue";
import PeopleList from "./PeopleList.vue";
import PersonDetailContainer from "./PersonDetailContainer.vue";
import { PersonCriteria } from "./PersonCriteria";
import { Person } from "./Person";
import peopleDao from "./people-fetch-service";

interface PeopleManagerData {
  peopleCache: Person[];
  people: Person[];
}

export default Vue.extend({
  props: {
    useCache: Boolean
  },
  data(): PeopleManagerData {
    return {
      peopleCache: [],
      people: [],
    };
  },
  computed: {
      handleChange: function(){
          return this.useCache ? this.handleChangeCached : this.handleChangeDb
      }
  },
  methods: {
    fetchData(criteria?: PersonCriteria) {
      return peopleDao
        .search(criteria)
        .then(people => (this.people = people))
        .catch(err => console.log("Could not fetch data"));
    },
    cacheData() {
      return peopleDao
        .search()
        .then(people => (this.peopleCache = people))
        .catch(err => console.log("Could not fetch data"));
    },
    handleChangeDb(criteria: PersonCriteria) {
      console.log("Fetching data");
      this.fetchData(criteria);
    },
    handleChangeCached(criteria: PersonCriteria) {
      console.log("Filtering data");
      this.filterPeople(criteria);
    },

    filterPeople(criteria: PersonCriteria) {
      const people = this.peopleCache.filter(p => {
        return Object.entries(criteria).every(([k, v]) => {
          let match = false;
          v = v || "";
          switch (k) {
            case "name":
              match = !!`${p.firstName} ${p.lastName}`.match(
                new RegExp(v, "i")
              );
              break;
            case "city":
            case "state":
              match = !!`${p.address[k]}`.match(new RegExp(v, "i"));
              break;
          }
          return match;
        });
      });
      this.people = people;
    },
    showPersonDetail(person:Person){
      this.$router.push(`/people/${person.id}`)
    }
  },
  created() {
    this.handleChangeDb = _.debounce(this.handleChangeDb, 150);
    if (this.useCache) {
      this.cacheData().then(() => (this.people = [...this.peopleCache]));
    }
  },
  updated() {
    console.log("Updated");
    if (this.useCache && !this.peopleCache.length) {
      this.cacheData().then(() => (this.people = [...this.peopleCache]));
    }
  },
  components: {
    PeopleSearch,
    PeopleList,
    PersonDetailContainer
  }
});
</script>

<style>
</style>
