<template>
    <div class="home">
        <barraNav />
        <compraVenta />
    </div>
</template>

<script>
import compraVenta from '@/components/compraVenta.vue'
import barraNav from '@/components/barraNav.vue'

export default {
    name: 'CompraVentaVista',
    components: {
        compraVenta,
        barraNav,
    }
}

</script>
    
    

