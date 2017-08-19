<template>
  <div class="row">
    <div class="col-md-12 row-filter">
      <h1>{{ name }} : {{ productId }}</h1>
      <h3>{{ description }}</h3>
      <h4> R$ {{ price }}</h4>

      <div class="row-filter">
        <img :src="image" class="col-6 col-offset-4" alt="">
      </div>

      <div class="row-filter">
        <b-button variant="success" @click="addToCart(productId)">Comprar!</b-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'events',
  data () {
    return {
      name: 'Camiseta Torvalds',
      price: '109',
      image: require('../assets/camiseta.png'),
      description: 'Uma camiseta louca...'
    }
  },
  props: ['productId'],
  methods: {
    addToCart (productId) {
      this.$router.push('/card/' + productId)
      // add to cart routine
    }
  }
}
</script>

<style>
.row-filter {
  margin-top: 20px;
}
</style>
