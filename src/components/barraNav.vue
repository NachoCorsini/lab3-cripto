<template>
    <nav class="navbar">
        <ul>
            <!-- <li><router-link to="/compraVenta" class="nav-link">Shop</router-link></li>
            <li><router-link to="/estadoActual" class="nav-link">Estado Actual</router-link></li>
            <li><router-link to="/historialMove" class="nav-link">Historial Movimientos</router-link></li> -->
        </ul>
    </nav>
</template>
  
<script>
export default {
    name: "barraNav"
};
</script>
  
<style scoped>
.navbar {
    background-color: #148F77;
    color: white;
    padding: 10px;
}

ul {
    list-style-type: none;
    display: flex;
    justify-content: space-around;
    padding: 0;
}

.nav-link {
    text-decoration: none;
    color: white;
    padding: 5px 10px;
    border-radius: 5px;
    transition: background-color 0.3s;
}

.nav-link:hover {
    background-color: #A9DFBF;
}
</style>