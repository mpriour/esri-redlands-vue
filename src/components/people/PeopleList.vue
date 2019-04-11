<template>
<div>
      <p>There are {{people.length}} people</p>
      <table class="table table-striped table-hover">
          <thead>
              <tr>
                  <th>Name</th>
                  <th>City</th>
                  <th>State</th>
              </tr>
          </thead>
          <tbody>
              <people-list-row @row-click="emitRowClick" v-for="person in people" :key="person.id" :person="person" />
          </tbody>
      </table>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import PeopleListRow from './PeopleListRow.vue'
import {Person} from './Person'
export default Vue.extend({
    components: {PeopleListRow},
    props: ["people"],
    methods: {
        emitRowClick(data:Person){
            this.$emit("row-click", data);
        }
    }
})
</script>

<style>

</style>
