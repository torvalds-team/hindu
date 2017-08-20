<template>
  <div class="row">
    <div class="col-md-12 row-filter">
      <div v-show="displayProduct">
        <h1>{{ name }} : {{ productId }}</h1>
        <h4> R$ {{ price }}</h4>
      </div>

      <div class="row-filter">
        <img :src="image" class="col-6 col-offset-4" alt="">
      </div>

      <div v-show="displayProduct">
        <div class="row-filter">
          <b-button variant="success" @click="cardPage(productId)">Comprar!</b-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from '../firebase/firebase.js'

export default {
  name: 'events',
  data () {
    return {
      displayProduct: false,
      name: '',
      price: '',
      image: require('../assets/loading.gif'),
      eventsRef: firebase.database().ref('events')
    }
  },
  props: ['productId'],
  methods: {
    cardPage () {
      this.$router.push('/card/' + this.productId)
    }

  },
  mounted () {
    var ref = firebase.database().ref('events')
    ref.once('value')
      .then(snapshot => {
        const product = snapshot
          .child('-KrtItSWwIXHQpQ6CRbB')
          .child('products')
          .child(this.productId)
          .val()

        if(!product) {
          throw new Error('Produto não existente')
        }

        this.displayProduct = true
        this.name = product.name
        this.price = Math.floor(product.price / 100)
        this.image = product.image_url
      })
      .catch((error) => {
        alert(error.message)
        this.$router.push('/capture')
      });
  }
}
</script>

<style>

</style>
