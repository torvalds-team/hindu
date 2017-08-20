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

import App from './../App'
import pagarme from 'pagarme'
import shortid from 'shortid'

export default {
  name: 'card',

  data () {
    return {
      card: {
        card_number: '4111111111111111',
        card_holder_name: 'Linus Torvalds',
        card_expiration_date: '0119',
        card_cvv: '777',
      }
    }
  },
  props: ["productId"],

  methods: {
    saveCustomer () {
      var ref = firebase.database().ref('events/-KrtItSWwIXHQpQ6CRbB/products/'+this.product_id)
    },
    checkout () {
      let client
      pagarme.client.connect({ api_key: process.env.PAGARME_APIKEY })
        .then(tClient => {
          client = tClient
          return client.cards.create({
            card_number: this.card.card_number,
            card_holder_name: this.card.card_holder_name,
            card_expiration_date: this.card.card_expiration_date,
            card_cvv: this.card.card_cvv,
          })
        })
        .then(card => {
          return client.transactions.create({
            amount: 1000,
            card_id: card.id,
            reference_key: shortid.generate(),
            split_rules: [
              {
                liable: true,
                charge_processing_fee: true,
                percentage: 5,
                charge_remainder_fee: true,
                recipient_id: "re_cj5e2ofwg0089m26du3cxfzta"
              },
              {
                liable: true,
                charge_processing_fee: true,
                percentage: 95,
                charge_remainder_fee: true,
                recipient_id: "re_cj5ie1uag00nq3m6diohlav3e"
              }
            ]
          })
        })
        .then(transaction => {
          if(transaction.status === 'paid') {
            return this.$router.push('/success/'+transaction.reference_key)
          }
          alert('Ocorreu algum erro durante a transação, tente novamente')
        })
        .catch(x => console.log(JSON.stringify(x)))
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
