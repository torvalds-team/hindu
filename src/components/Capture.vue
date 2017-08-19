<template>
  <div class="container">
  <h5>Insira o código do produto</h5>
    <b-form-input type="text"
                  placeholder="Código do produto"
    ></b-form-input>
    <b-button @click.native="productDetail()">
      Capturar
    </b-button>
  </div>
</template>

<script>
export default {
  name: 'capture',

  data () {
    return {}
  },

  methods: {
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
