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
      .then((obj) => {
        this.$emit('setUid', obj.uid)
        this.$router.push('/capture')
      })
      .catch(function(error) {
        alert(error.message)
      });
    }
  }
}
</script>

<style>

</style>
