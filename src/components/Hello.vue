<template>
  <div class="container">
    <b-list-group>
      <hr>
      <h1> Eventos </h1>
      <hr>
      <b-list-group-item v-for="eventItem in eventsArray" :key="eventItem.key" @click.native="toEvents(eventItem)">
        <h4 class="col-8">{{ eventItem.name }}</h4>
        <b-badge class="col-2" pill variant="success">{{ eventItem.distance }} Km</b-badge>
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>

import firebase from '../firebase/firebase.js'
import snapshotToArray from '../snapshotToArray/snapshotToArray.js'

export default {
  name: 'hello',

  data () {
    return {
      eventsRef: firebase.database().ref('events'),
      eventsArray: []
    }
  },

  mounted () {
  },

  methods: {
    toEvents (eventItem) {
      setTimeout(() => {
        this.$router.push('/events/' + eventItem.key)
      }, 300)
    },
  },

  beforeMount () {
    this.eventsRef.once('value')
      .then((snapshot) => {
        this.eventsArray = snapshotToArray(snapshot)
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
