<template>
  <div class="container">
    <h3>
      Sua compra foi realizada com sucesso, utilize o código
      <strong>{{ transactionReference }}</strong> para retirar seu pedido
    </h3>
  </div>
</template>

<script>
export default {
  name: 'sucess',

  data () {
    return {}
  },
  props: ['transactionReference'],


  methods: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
