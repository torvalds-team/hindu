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
import toastr from 'toastr'

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
          this.$parent.$emit('setUid', obj.uid)
          this.$router.push('/capture')
          toastr.success('Sucesso!', '', { positionClass: "toast-bottom-center" })
        })
        .catch((error) => {
          toastr.error(error.message, '', { positionClass: "toast-bottom-center" })
        });
    },
    authenticateWithFB () {
      this.provider.addScope('user_birthday')
      firebase.auth()
        .signInWithPopup(this.provider)
        .then((result) => {
          var token = result.credential.accessToken
          this.$parent.$emit('setUid', result.user.uid)
          this.$router.push('/capture')
          toastr.success('Sucesso!', '', { positionClass: "toast-bottom-center" })
        }).catch((error) => {
          toastr.error(error.message, '', { positionClass: "toast-bottom-center" })
        })
    }
  },

  mounted () {

  }
}
</script>

<style>

</style>
