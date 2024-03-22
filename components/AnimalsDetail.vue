  <script lang="ts">
  import { defineComponent, ref, onMounted } from 'vue'
  import { useRoute } from 'vue-router'
  
  export default defineComponent({
    name: 'animalDetails',
    setup() {
      const route = useRoute()
      const animalId = ref<string>('')
  
      // Get the animal ID from the route params
      onMounted(() => {
        animalId.value = route.params.id as string
      })
  
      return {
        animalId
      }
    }
  })
  </script>
<template>
    <div>
      <h1>Animal Details</h1>
      <div>
        <p>Animal ID: {{ animalId }}</p>
        <!-- Display more details about the animal -->
      </div>
    </div>
  </template>
  
  
  <style scoped>
  /* Your component styles */
  </style>
  