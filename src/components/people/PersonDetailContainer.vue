<template>
    <person-detail :person="selectedPerson"/>
</template>

<script lang="ts">
import Vue from 'vue'
import {Person} from './Person'
import personDao from './people-fetch-service'
import PersonDetail from './PersonDetail.vue'
export default Vue.extend({
    components:{
        PersonDetail
    },
    props:{
        id: String,
        person: Object
    },
    data(){
        return {
            selectedPerson: {}
        }
    },
    watch:{
        id: function(newId){
            this.getPerson(newId).then(p => this.selectedPerson = p)
        },
        person: function(p){
            this.selectedPerson = p
        }
    },
    methods:{
        getPerson(id:string):Promise<Person>{
            if(id && id != ""){
                return personDao.getById(id)
            }
            return Promise.reject("Incorrect Arguments")
        }
    },
    created(){
       if(this.id){
           this.getPerson(this.id).then(p => this.selectedPerson = p)
       }
    }
})
</script>

<style>

</style>
