<template>
  <div>
    <h1>Bem vindo ao evento {{ eventName }}</h1>
  </div>
</template>

<script>
export default {
  name: 'events',
  data () {
    return {

    }
  },
  props: ['eventName']
}
</script>

<style>

</style>
