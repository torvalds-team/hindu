<template>
  <div class="container">
    <h1 class="row-filter">Bem vindo ao evento {{ event.name }}</h1>
    <h3 class="row-filter">{{ event.text }}</h3>
  </div>
</template>

<script>
import firebase from '../firebase/firebase.js'

export default {
  name: 'events',
  props: ['eventKey'],
  data () {
    return {
      eventsRef: firebase.database().ref('events'),
      event: {
        name: '',
        text: ''
      }
    }
  },
  beforeMount () {
    this.eventsRef.child(this.eventKey)
      .once('value')
      .then((snapshot) => {
        this.event = snapshot.val()
      })
  }
}
</script>

<style>

</style>
