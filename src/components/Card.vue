<template>
  <div class="container">

    <h5 class="row-filter">Número do cartão</h5>
    <b-form-input type="number" placeholder="0000-0000-0000-0000" v-model="card.card_number"></b-form-input>

    <h5 class="row-filter">Nome impresso no cartão</h5>
    <b-form-input type="text" placeholder="Linus Torvalds" v-model="card.card_holder_name"></b-form-input>

    <h5 class="row-filter">Validade</h5>
    <b-form-input type="text" placeholder="00/00" v-model="card.card_expiration_date"></b-form-input>

    <h5 class="row-filter">Codigo de segurança</h5>
    <b-form-input type="number" placeholder="CVV" v-model="card.card_cvv"></b-form-input>

    <div class="row-filter col-md-12">
      <b-button @click.native="checkout()" size="lg" variant="primary">
        Comprar
      </b-button>
      <b-button @click.native="checkout()" size="lg" variant="primary">
        Pagar com dinheiro
      </b-button>
    </div>

  </div>
</template>

<script>
export default {
  name: 'card',

  data () {
    return {
      card: {
        card_number: '',
        card_holder_name: '',
        card_expiration_date: '',
        card_cvv: '',
      }
    }
  },

  props: ["productId"],

  methods: {
    checkout () {
      // Implementar código que faz a transação

      // Para acessar o valor dos campos use

      // Os valores do campo estão disponiveis na variável this.card
      // card: {
      //   card_number: '',
      //   card_holder_name: '',
      //   card_expiration_date: '',
      //   card_cvv: '',
      // }

      // Redirecionar após sucesso
      // this.$router.push('/success')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
