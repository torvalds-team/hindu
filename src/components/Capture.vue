<template>
  <div class="container">
  <h5>Insira o código do produto</h5>
    <b-form-input type="text"
                  v-model="product_id"
                  placeholder="Código do produto"
    ></b-form-input>
    <b-button @click.native="capture">
      Capturar
    </b-button>
  </div>
</template>

<script>
import firebase from '../firebase/firebase.js'

export default {
  name: 'capture',

  data () {
    return {
      product_id: ''
    }
  },

  methods: {
    capture () {
      var ref = firebase.database().ref('events')
      ref.once('value')
        .then(snapshot => {
          const product = snapshot
            .child('-KrtItSWwIXHQpQ6CRbB')
            .child('products')
            .child(this.product_id)
            .val()

          if(!product) {
            throw new Error('Produto não existente')
          }

          this.productDetail()
        })
        .catch(function(error) {
          alert(error.message)
        });
    },
    productDetail () {
      setTimeout(() => {
        this.$router.push('/product/123')
      }, 300)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
