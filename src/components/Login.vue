<template>
  <div class="container">
    <div class="row"></div>
    <h5 class="row-filter">Usuário</h5>
    <b-form-input type="text" v-model="email" placeholder="exemplo@exemplo.com.br"></b-form-input>

    <h5 class="row-filter">Senha</h5>
    <b-form-input type="password" v-model="password" placeholder="Digite sua senha"></b-form-input>

    <b-button class="row-filter" @click="authenticate">
      Logar
    </b-button>

    <b-button class="row-filter" variant="primary" @click="authenticateWithFB">
      Logar com o Facebook
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
      user: '',
      password: '',
      provider: new firebase.auth.FacebookAuthProvider()
    }
  },

  methods: {
    authenticate () {
      var auth = firebase.auth().signInWithEmailAndPassword(this.email, this.password)
        .then((obj) => {
          this.$emit('setUid', obj.uid)
          this.$router.push('/capture')
        })
        .catch(function (error) {
          alert(error.message)
        });
    },
    authenticateWithFB () {
      this.provider.addScope('user_birthday')
      firebase.auth().signInWithPopup(this.provider).then((result) => {
        var token = result.credential.accessToken
        console.log(this.$parent.$emit('setUid', result.user.uid))
        this.$router.push('/capture')
      }).catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        this.email = error.email
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential
      })
    }
  },

  mounted () {

  }
}
</script>

<style>

</style>
