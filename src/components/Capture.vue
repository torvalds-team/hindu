<template>
  <div class="container">
    <h5>Insira o código do produto</h5>
    <b-form-input type="text" class="row-filter" v-model="product_id" placeholder="Código do produto"></b-form-input>

    <b-button class="row-filter" @click.native="capture">
      Capturar
    </b-button>

    <b-media vertical-align="center" class="row-filter">
      <div style="margin: auto;" id="my_camera"></div>
    </b-media>

    <b-media vertical-align="center">
      <img :src="qrCode">
    </b-media>

    <b-button @click.native="takePhoto">
      Ler QR Code
    </b-button>
  </div>
</template>

<script>
import firebase from '../firebase/firebase.js'
import Webcam from 'webcamjs'

export default {
  name: 'capture',

  data () {
    return {
      product_id: '',
      qrCode: null
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

          if (!product)
            throw new Error('Produto não existente')

          this.productDetail()
        })
        .catch(function (error) {
          alert(error.message)
        });
    },
    productDetail () {
      setTimeout(() => {
        this.$router.push('/product/' + this.product_id)
      }, 300)
    },
    takePhoto () {
      console.log('asdhasudhasuhd')
      Webcam.snap((data_uri) => {
        this.qrCode = data_uri
      })
    }
  },

  mounted () {
    Webcam.set({
      width: 320,
      height: 240,
      image_format: 'jpeg'
    });
    Webcam.attach('#my_camera')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
