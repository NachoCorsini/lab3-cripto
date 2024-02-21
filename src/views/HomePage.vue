<template>
    <div class="homepage">
      <BarraNav /> <!-- Corregido: Usando formato camelCase para el nombre del componente -->
      <div class="button-container" @click="goTo('compraVenta')">
        <h6>SHOP & SELL</h6>
        <img src="@/assets/imagenes/shop.png" alt="Shop Button" /> <!-- Corregido: Uso de ruta relativa a través de @ -->
      </div>
      <div class="button-container" @click="goTo('estadoActual')">
        <h6>ESTADO DE TRANSACCIONES</h6>
        <img src="@/assets/imagenes/estado.png" alt="Estado Button" />
      </div>
      <div class="button-container" @click="goTo('historialMove')">
        <h6>HISTORIAL DE MOVIMIENTOS</h6>
        <img src="@/assets/imagenes/historial.png" alt="Historial Button" />
      </div>
    </div>
  </template>
  
  <script>
  import BarraNav from '@/components/barraNav.vue'; // Corregido: Nombre del componente en formato camelCase
  // No es necesario importar los componentes compraVenta, estadoActual y historialMove si solo se usan en las rutas
  
  export default {
    name: 'HomePage',
    components: {
      BarraNav, // Corregido: Usando formato camelCase para el nombre del componente
    },
    methods: {
      goTo(route) {
        this.$router.push({ name: route }); // Corregido: Redirigir a la ruta especificada
      },
    },
  };
  </script>
  
  <style>
  /* Estilos para la página de inicio */
  </style>
  

<style scoped>
.container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 76vh;
    margin-top: 20px;
    margin-left: 8px;
    margin-right: 8px;
    background: linear-gradient(to bottom right, rgb(240, 240, 226), black);
}

.button-container {
    background: none;
    border: none;
    cursor: pointer;
}

.button-container img {
    width: 100px;
    height: auto;
    transition: transform 0.2s ease;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
    border: solid rgba(255, 255, 0, 0.389);
    border-radius: 9px;

}

.button-container:hover img {
    transform: scale(0.95);
}
</style>
