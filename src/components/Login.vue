<template>
  <div class="container">
    <h5>Usuário</h5>
    <b-form-input type="text"
      placeholder="exemplo@exemplo.com.br"
    ></b-form-input>
    <h5>Senha</h5>
    <b-form-input type="text"
      placeholder="Digite sua senha"
    ></b-form-input>
    <b-button @click="capture">
      Logar
    </b-button>
  </div>
</template>

<script>
export default {
  name: 'login',

  data () {
    return {}
  },

  methods: { 
    capture () {
      this.$router.push('/capture')
    }
  }
}
</script>

<style>

</style>
