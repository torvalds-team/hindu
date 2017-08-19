<template>
  <div class="container">
    <h5>Número do cartão</h5>
    <b-form-input type="text"
                  placeholder="0000-0000-0000-0000"
    ></b-form-input>
    <h5>Validade</h5>
    <b-form-input type="text"
                  placeholder="00/00"
    ></b-form-input>
    <h5>Codigo de segurança</h5>
    <b-form-input type="text"
                  placeholder="CVV"
    ></b-form-input>
    <div class="col-md-12">
      <b-button size="lg" variant="primary">
        Comprar
      </b-button>
    </div>
    <div class="col-md-12">
      <b-button size="sm" variant="secondary">
        Pagar com dinheiro
      </b-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'card',

  data () {
    return {}
  },

  methods: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
