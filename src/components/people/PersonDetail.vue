<template>
    <div class="card" v-if="person.id">
        <div class="card-header bg-dark text-white">
            <img :src="photo" />
            <h1 class="d-inline ml-3">{{person.firstName}} {{person.lastName}}</h1>
        </div>
        <ul class="list-group">
            <li class="list-group-item">Born: {{person.dateOfBirth}}</li>
            <li class="list-group-item">{{person.address.street}}</li>
            <li class="list-group-item">{{person.address.city}}, {{person.address.state}}</li>
        </ul>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import {Person} from './Person'

export default Vue.extend({
    props:{
        person: Object
    },
    computed:{
        photo: function () {
            return `https://picsum.photos/150?image=${this.person.id}`
        }
    }
})
</script>

<style>

</style>
