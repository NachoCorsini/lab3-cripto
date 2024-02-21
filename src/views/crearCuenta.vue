<template>
    <div id="app">
        <div class="background"></div>
        <div class="centering">
            <form class="my-form" @submit.prevent="submitRegistrationForm" id="registro">
                <div class="login-welcome-row">
                    <img class="login-welcome" src="../assets/imagenes/CRIPWALLET-removebg-preview.png" alt="criptoWallet">
                </div>
                <h1>Regístrate aquí</h1>
                <div class="text-field">
                    <label for="email">Email:</label>
                    <input v-model="email" type="email" id="email" name="email" placeholder="Ingrese un email">
                </div>
                <div class="text-field">
                    <label for="password">Contraseña:</label>
                    <input v-model="password" type="password" id="password" name="password"
                        placeholder="Ingrese una contraseña" title="Mínimo 6 caracteres, al menos una letra y un número"
                        pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$">
                </div>
                <input type="submit" class="my-form__button" value="Registrarse">
            </form>
        </div>
    </div>
</template>

  
<script>
export default {
    name: 'crearCuenta',
    data() {
        return {
            email: '',
            password: ''
        };
    },
    methods: {
        submitRegistrationForm() {
            if (this.email.trim() === '' || this.password.trim() === '') {
                alert("Por favor, ingresa tu correo electrónico y/o contraseña");
            } else {
                console.log('Email:', this.email);
                console.log('Password:', this.password);

                alert('Registro exitoso');
                this.$router.push('/home');

            }
        }
    }
};
</script>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Mulish&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Mulish', sans-serif;
}

h1 {
    color: #343a40;
    margin-top: 10px;
}

.background {
    content: "";
    position: absolute;
    height: 100vh;
    width: 100vw;
    display: grid;
    place-items: center;
    background-image: url('../assets/imagenes/dinero.jpg');
    opacity: 0.5;
    background-size: 100%;
    background-repeat: round;
    background-size: auto;
}

.centering {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
}

.my-form {
    display: flex;
    flex-direction: column;
    position: relative;
    gap: 20px;
    background-color: #2dea50;
    border: 2px solid #343a40;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    min-width: 280px;
    max-width: 460px;
    width: 100%;
}

.my-form__button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 12px 20px;
    font-size: 18px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.my-form__button:hover {
    background-color: #24c747;
}

.text-field {
    display: flex;
    flex-direction: column;
}

.text-field input {
    background-color: #e9ecef;
    border: 1px solid #ced4da;
    color: #495057;
    padding: 10px;
    border-radius: 5px;
}

.text-field label {
    color: #343a40;
    font-size: 16px;
    margin-bottom: 5px;
}

.text-field input::-webkit-input-placeholder {
    color: #1b1a1c;
}

.text-field input:focus {
    border: 1px solid #fa4646;
}

.login-welcome-row,
h1 {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.login-welcome {
    max-width: 200px; 
    max-height: 200px; 
}
</style>


 