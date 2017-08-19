<template>
  <div id="app">
    <header @click="goHome()" v-on:setUid="setUser">
      <span id="appHeader">Nosso App Foda</span>
    </header>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      userId: ''
    }
  },
  methods: {
    setUser (uId) {
      this.userId = uId
    },
    setEvent (eventId) {
      this.eventId = eventId
    },
    goHome () {
      this.$router.push('/')
    }
  }
}
</script>

<style>
body {
  margin: 0;
}

#appHeader {
  cursor: pointer;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

main {
  text-align: center;
  margin-top: 20px;
}

header {
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  background-color: #35495E;
  color: #ffffff;
}

header span {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
}

.row-filter {
  margin-top: 20px;
}

</style>
