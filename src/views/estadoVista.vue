<template>
    <div class="home">
      <barraNav />
      <estadoActual/>
      
    </div>
  </template>
  
  <script>
  
  import estadoActual from '@/components/estadoActual.vue'
  import barraNav from '@/components/barraNav.vue'
 
  
  export default {
    name: 'estadoVista',
    components: {
      estadoActual,
      barraNav,
     
  }
  }
  </script>