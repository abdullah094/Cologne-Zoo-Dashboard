<script lang="ts" setup>
import { computed } from 'vue'
import type { PropType } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import type { Animal } from '../types'
import { calculateAgeInYears } from '../composables/helpers'
import { ref } from 'vue'

const props = defineProps({
  animals: {
    type: Array as PropType<Array<Animal>>,
    required: true,
  },
})
// const router = useRouter()

// Animals are actually sorted by weight
// Sorted by names
const animalsSortedByName = computed(() => props.animals.slice().sort((animalA, animalB) => animalA.name.localeCompare(animalB.name)));


const  doSomething = () =>{
  console.log("pressed");
  
}
</script>

<template>
 
  <table class="table-auto">
    <thead>
      <tr>
        <th>Index</th>
        <th>Species</th>
        <th>Name</th>
        <th>Gender</th>
        <th>Age (yrs)</th>
        <th>Weight (kg)</th>
        <th>Details</th>
      </tr>
    </thead>
    <tbody>
     
      <tr v-for="({ id, species, gender, age, weight,name,favouriteFruit,height,requiredFood }, animalIndex) in animalsSortedByName" :key="id" class="hover:bg-gray-200">
        <td>{{ animalIndex + 1 }}</td>
        <td>{{ species }}</td>
        <td>{{ name }}</td>
        <td>{{ gender }}</td>
        <td>{{ age }}</td>
        <td>{{ weight }}</td>
        <td>
         <details>
  <summary>Details</summary>

    <table>
     
    <tr><b>Favorite Fruit: </b>{{favouriteFruit}}</tr> 
    <tr>
      <b>Height: </b>
      {{ height }}m
    </tr>  
    <tr>
      <b>Required Food: </b>
      {{requiredFood }}kg
    </tr>  
    </table>


</details> 

</td>

      </tr>
    </tbody>
  </table>
</template>

<style scoped>
table {
  @apply text-left
}

td {
  @apply w-40
}

tr {
  @apply border-b-2
}
</style>
