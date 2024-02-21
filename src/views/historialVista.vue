<template>
    <div class="home">
        <barraNav />
        <historialMove/>
    </div>
</template>
  
<script>

import historialMove from '@/components/historialMove.vue'
import barraNav from '@/components/barraNav.vue'


export default {
    name: 'historialVista',
    components: {
        historialMove,
        barraNav,
    }
}
</script>