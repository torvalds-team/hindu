<template>
  <div class="container">

    <h2>Cartões</h2>
    <img v-if="!listCards" src="../assets/loading.gif"></img>
    <b-button v-bind:class="{ green: cardId !== '' }" @click.native="setCard()" class="cards" v-if="listCards">
      <div> {{ firstDigits }}***{{ lastDigits }} </div>
      <div> {{ holderName }} </div>
    </b-button>

    <h5 class="row-filter">Número do cartão</h5>
    <b-form-input type="number" value="" placeholder="0000-0000-0000-0000" v-model="card.card_number"></b-form-input>

    <h5 class="row-filter">Nome impresso no cartão</h5>
    <b-form-input type="text" placeholder="Nome do portador" v-model="card.card_holder_name"></b-form-input>

    <h5 class="row-filter">Validade</h5>
    <b-form-input type="text" placeholder="MMAA" v-model="card.card_expiration_date"></b-form-input>

    <h5 class="row-filter">Código de segurança</h5>
    <b-form-input type="number" placeholder="CVV" v-model="card.card_cvv"></b-form-input>

    <div class="row-filter col-md-12">
      <b-button :disabled="canBuy == 0" @click.native="checkout()" size="lg" variant="primary">
        Comprar
      </b-button>
      <img v-if="canBuy == 0" class="row-filter" src="../assets/loading.gif"></img>
    </div>

  </div>
</template>

<script>

import App from './../App'
import pagarme from 'pagarme'
import shortid from 'shortid'
import firebase from '../firebase/firebase.js'
import toastr from 'toastr'

export default {
  name: 'card',
  mounted () {
    this.getCard()
  },

  data () {
    return {
      card: {
        card_number: '',
        card_holder_name: '',
        card_expiration_date: '',
        card_cvv: '',
      },
      canBuy: true,
      listCards: false,
      firstDigits: '',
      lastDigits: '',
      holderName: '',
      clientCard: '',
      cardId: '',
    }
  },
  props: ["productId"],

  methods: {
    getCard () {
      return firebase.database().ref('customers/' + App.data().userId)
        .once('value')
        .then(response => {
          if (response.val() !== null) {
            return pagarme.client.connect({ api_key: "ak_test_GCYeHCJterPgIQtn8t4LSW06AtIDBa" })
              .then(tClient => {
                tClient.cards.find({ id: response.val().card_id })
                  .then(card => {
                    this.listCards = true
                    this.clientCard = card
                    this.firstDigits = card.first_digits
                    this.lastDigits = card.last_digits
                    this.holderName = card.holder_name
                    toastr.success('Cartões atualizados!', '', { positionClass: "toast-bottom-center" })
                  })
              })
          }
        })
    },
    setCard () {
      this.cardId = this.clientCard.id
    },
    saveCustomer (name, card_id) {
      return firebase.database().ref('customers/' + App.data().userId)
        .once('value')
        .then(response => {
          if (response.val() === null) {
            return firebase.database().ref('customers/' + App.data().userId).set({
              name: name,
              card_id: card_id,
            })
            toastr.success('Cartão salvo!', '', { positionClass: "toast-bottom-center" })
          }
          return null
        })
    },
    checkout () {
      this.canBuy = false
      let client
      pagarme.client.connect({ api_key: "ak_test_GCYeHCJterPgIQtn8t4LSW06AtIDBa" })
        .then(tClient => {
          client = tClient
          if (this.cardId !== '') {
            toastr.success('Cartão conectado!', '', { positionClass: "toast-bottom-center" })
            return Promise.resolve({ id: this.cardId })
          }

          return client.cards.create({
            card_number: this.card.card_number,
            card_holder_name: this.card.card_holder_name,
            card_expiration_date: this.card.card_expiration_date,
            card_cvv: this.card.card_cvv,
          })
        })
        .then(card => {
          return firebase.database().ref('events/-KrtItSWwIXHQpQ6CRbB/products/' + this.productId)
            .once('value')
            .then(product => {
              return client.transactions.create({
                amount: product.val().price,
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
            .catch(x => {
              return this.$router.push('/card/' + this.productId)
              console.log(JSON.stringify(x))
            })
        })
        .then(transaction => {
          return this.saveCustomer('', transaction.card.id)
            .then(() => {
              if (transaction.status === 'paid') {
                return this.$router.push('/success/' + transaction.reference_key)
              }
              toastr.error('Ocorreu algum erro durante a transação, tente novamente', '', { positionClass: "toast-bottom-center" })
            })
            .catch(x => {
              return this.$router.push('/card/' + this.productId)
              console.log(JSON.stringify(x))
              toastr.error(JSON.stringify(x), '', { positionClass: "toast-bottom-center" })
            })
        })
        .catch(x => {
          return this.$router.push('/card/' + this.productId)
          toastr.error(JSON.stringify(x), '', { positionClass: "toast-bottom-center" })
          console.log(JSON.stringify(x))
        })
    }
  }
}
</script>

<style>
.cards {
  border: 1px solid black;
  margin-bottom: 10px;
}

.green {
  background-color: #8cffb2;
}
</style>
