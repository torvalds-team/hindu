<template>
  <div class="container">
    <b-list-group>
      <hr>
      <h1> Eventos </h1>
      <hr>
      <b-list-group-item @click.native="toEvents('Open DLP')">
        Open DLP
      </b-list-group-item>

      <b-list-group-item @click.native="toEvents('PHPRio')">
        PHPRio
      </b-list-group-item>

      <b-list-group-item @click.native="toEvents('Frontin BH 2k17')">
        Frontin BH 2k17
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
export default {
  name: 'hello',

  data () {
    return {
      msg: 'Welcome to Your Vue.js PWA'
    }
  },

  methods: {
    toEvents (eventName) {
      setTimeout(() => {
        this.$router.push('/events/' + eventName)
      }, 300)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
