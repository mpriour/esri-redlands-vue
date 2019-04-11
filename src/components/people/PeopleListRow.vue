<template>
  <tr @click="emitRowClick">
    <td>{{person.firstName}} {{person.lastName}}</td>
    <td>{{person.address.city}}</td>
    <td>{{person.address.state}}</td>
  </tr>
</template>

<script lang="ts">
import Vue from "vue";
import { Person } from "./Person";
export default Vue.extend({
  props: ["person"],
  methods:{
      emitRowClick(evt:Event){
          this.$emit("row-click", this.person)
      }
  }
});
</script>

<style>
</style>
