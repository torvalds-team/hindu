<template>
  <div class="container">

    <h5 class="row-filter">Número do cartão</h5>
    <b-form-input type="number" value="" placeholder="0000-0000-0000-0000" v-model="card.card_number"></b-form-input>

    <h5 class="row-filter">Nome impresso no cartão</h5>
    <b-form-input type="text" value="Linus Torvalds" placeholder="Linus Torvalds" v-model="card.card_holder_name"></b-form-input>

    <h5 class="row-filter">Validade</h5>
    <b-form-input type="text" value="01/19" placeholder="00/00" v-model="card.card_expiration_date"></b-form-input>

    <h5 class="row-filter">Codigo de segurança</h5>
    <b-form-input type="number" value="999" placeholder="CVV" v-model="card.card_cvv"></b-form-input>

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
import axios from 'axios'
export default {
  name: 'card',

  data () {
    return {
      card: {
        card_number: '',
        card_holder_name: 'Linus Torvalds',
        card_expiration_date: '01/19',
        card_cvv: '777',
      }
    }
  },

  props: ["productId"],

  methods: {
    checkout () {
        axios.post('https://api.mundipagg.com/core/v1/customers/'+process.env.CUSTOMER_ID+'/cards', {
            number: this.card.card_number,
            holder_name: this.card.card_holder_name,
            exp_date: this.card.card_expiration_date,
            cvv: this.card.card_cvv
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error.message);
        });
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
