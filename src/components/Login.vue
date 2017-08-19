<template>
  <div class="container">
    <h5>Usuário</h5>
    <b-form-input type="text"
      v-model="email"
      placeholder="exemplo@exemplo.com.br"
    ></b-form-input>
    <h5>Senha</h5>
    <b-form-input type="password"
      v-model="password"
      placeholder="Digite sua senha"
    ></b-form-input>
    <b-button @click="authenticate">
      Logar
    </b-button>
  </div>
</template>

<script>
import firebase from '../firebase/firebase.js'

export default {
  name: 'login',

  data () {
    return {
      email: '',
      password: ''
    }
  },

  methods: {
    authenticate () {
      var auth = firebase.auth().signInWithEmailAndPassword(this.email, this.password)
      .catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
      });
      console.log(auth)
    }
  }
}
</script>

<style>

</style>
