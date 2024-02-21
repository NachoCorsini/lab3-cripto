<template>
    <div id="app">
      <div class="background"></div>
      <div class="centering">
        <form class="my-form login-form" @submit.prevent="submitLoginForm">
          <div class="login-welcome-row">
            <img class="login-welcome" src="../assets/imagenes/CRIPWALLET-removebg-preview.png" alt="criptoWallet">
            <h1>Unete a nosotros!</h1>
          </div>
          <div class="text-field">
            <label for="email">Email:</label>
            <input v-model="email" type="email" id="email" name="email" placeholder="Ingrese un email">
          </div>
          <div class="text-field">
            <label for="password">Contraseña:</label>
            <input v-model="password" type="password" id="password" name="password" placeholder="Ingrese una contraseña"
              title="Mínimo 6 caracteres al menos una letra y un número" pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$">
          </div>
          <input type="submit" class="my-form__button" value="Login">
          <div class="my-form__actions">
            <div class="my-form__row">
              <span>¿Olvidaste tu contraseña?</span>
              <a href="#" title="Reset Password" @click="openRecoveryModal()">Recuperar Contraseña</a>
            </div>
            <div class="my-form__signup">
              <a href="#" title="Create Account" @click="goToCreateAccount">Crear una cuenta</a>
            </div>
          </div>
        </form>
      </div>
      <div v-if="showRecoveryModal" id="recoveryModal" class="modal">
        <div class="modal-content">
          <span class="close" @click="closeRecoveryModal">&times;</span>
          <label for="recoveryEmail">Ingrese su email:</label>
          <input v-model="recoveryEmail" type="email" id="recoveryEmail" required>
          <button type="button" @click="sendRecoveryEmail">Enviar recuperación de contraseña</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: '',
        password: '',
        showRecoveryModal: false,
        recoveryEmail: ''
      };
    },
    methods: {
      submitLoginForm() {
        if (this.email.trim() === '' || this.password.trim() === '') {
          alert("Por favor, ingresa tu correo electrónico y/o contraseña");
        } else {
          this.$store.commit("newUser", this.email); // Llama a la acción del store
          alert('Inicio de sesión exitoso');
          this.$router.push('/Home');
        }
      },
      openRecoveryModal() {
        this.closeRecoveryModal();
        this.showRecoveryModal = true;
      },
      closeRecoveryModal() {
        this.showRecoveryModal = false;
      },
      sendRecoveryEmail() {
        alert('Correo de recuperación enviado a: ' + this.recoveryEmail);
        this.closeRecoveryModal();
      },
      goToCreateAccount() {
        this.$router.push('/crearCuenta');
      }
    }
  };
  
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Mulish&display=swap');
  
  #app {
    position: relative;
    height: 100vh;
    background-image: url('../assets/imagenes/dinero.jpg');
    background-size: contain;
    background-position: center;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Mulish;
  }
  
  h1 {
    color: #230c46;
  }
  
  .background {
    content: "";
    position: absolute;
    height: 100vh;
    width: 100vw;
    display: grid;
    place-items: center;
    opacity: 0.5;
    background-color: #0e0f0d;
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
    gap: 16px;
    background-color: #64dcec;
    border: 1px solid #ec8551;
    border-radius: 16px;
    box-shadow: 0 20px 60px #2d2d2d;
    min-width: 280px;
    max-width: 460px;
    width: 100%;
    padding: 32px;
  }
  
  .login-form .my-form {
    background-color: #f8f9fa;
    border: 2px solid #343a40;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  }
  
  .login-form .my-form h1 {
    color: #343a40;
    font-size: 24px;
    margin-bottom: 20px;
  }
  
  .login-form .text-field input {
    background-color: #e9ecef;
    border: 1px solid #ced4da;
    color: #495057;
    padding: 10px;
    border-radius: 5px;
  }
  
  .login-form .text-field label {
    color: #343a40;
    font-size: 16px;
    margin-bottom: 5px;
  }
  
  .login-form .my-form__button {
    background-color: #2d98f6;
    color: white;
    border: none;
    padding: 12px 20px;
    font-size: 18px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .login-form .my-form__button:hover {
    background-color: #16e92e;
  }
  
  .login-form .my-form__actions a {
    color: #343a40;
    text-decoration: none;
    font-size: 14px;
    transition: color 0.3s ease;
  }
  
  .login-form .my-form__actions a:hover {
    color: #f00c0c;
  }
  
  .login-welcome {
    height: 80px;
    width: 80px;
    border-radius: 50%;
    object-fit: cover;
  }
  
  .login-welcome-row {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 8px;
  }
  
  .my-form__button {
    background-color: #ec8551;
    color: black;
    white-space: nowrap;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 16px;
    line-height: 50px;
    outline: none;
    font-size: 18px;
    letter-spacing: .025em;
    text-decoration: none;
    cursor: pointer;
    font-weight: 800;
    min-height: 50px;
    width: 100%;
    border-radius: 8px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, .15);
    transition: all .3s ease;
  }
  
  .my-form__button:hover {
    background-color: #32e400;
  }
  
  .text-field input {
    color: #230c46;
    font-size: 16px;
    font-weight: 500;
    max-width: 100%;
    width: 100%;
    border: 1px solid #230c46;
    height: 50px;
    letter-spacing: .03rem;
    background-color: transparent;
    outline: none;
    transition: .25s;
    border-radius: 8px;
    text-indent: 20px;
    margin-top: 8px;
  }
  
  .text-field input::-webkit-input-placeholder {
    color: #0f0f0f;
  }
  
  .text-field input:focus {
    border: 1px solid #ec8551;
  }
  
  .text-field label {
    color: #230c46;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: .03rem;
    z-index: 10;
  }
  
  .my-form__actions {
    display: flex;
    flex-direction: column;
    color: #230c46;
    gap: 16px;
    margin-top: 8px;
  }
  
  .my-form__actions a {
    color: #230c46;
    font-weight: 600;
  }
  
  .my-form__actions a:hover {
    color: #a7a2cb;
  }
  
  .my-form__row {
    display: flex;
    justify-content: space-between;
  }
  
  .my-form__signup {
    display: flex;
    justify-content: center;
  }
  
  .my-form__signup a {
    color: #ec8551;
    font-weight: 800;
    text-decoration: none;
    font-size: 18px;
  }
  
  .my-form__signup a:hover {
    color: #32e400;
  }
  
  .modal {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.456);
  }
  
  .modal-content {
    background-color: #e8f3f1;
    margin: 15% auto;
    padding: 20px;
    width: 50%;
    border-radius: 10px;
    border-style: solid;
  }
  
  .close {
    color: #850a0a;
    float: right;
    font-size: 28px;
    font-weight: bold;
    cursor: pointer;
    background-color: #e8f3f1;
  }
  
  .close:hover,
  .close:focus {
    color: rgb(15, 15, 15);
  }
  
  .modal-content button {
    background-color: #3498db;
    color: rgb(17, 16, 16);
    padding: 10px 15px;
    border: none;
    border-radius: 7px;
    cursor: pointer;
    margin-top: 10px;
  }
  
  .modal-content button:hover {
    background-color: #0cd638b7;
  }
  
  .modal-content input,
  .modal-content label {
    width: 50%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #0d0c0c;
    border-radius: 5px;
    box-sizing: border-box;
    background-color: #f6f5f5b3;
  }
  </style>
  
  
  