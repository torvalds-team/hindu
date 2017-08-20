<template>
  <div id="app">
    <header>
      <span @click="goHome()" id="appHeader"> Hindu
        <b-button v-if="userId" @click.native="logout" size="sm" variant="outline-danger sm" class="float-right">
          Logout
        </b-button>
      </span>
    </header>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import toastr from 'toastr'

export default {
  name: 'Hindu',
  data () {
    return {
      userId: localStorage.getItem('userId')
    }
  },
  methods: {
    goHome () {
      this.$router.push('/')
    },
    logout () {
      localStorage.removeItem('userId')
      this.userId = ''
      this.goHome()
      toastr.success('Logout feito com sucesso!', '' , { positionClass: "toast-bottom-center" })
    }
  },
  beforeMount () {
    this.$on('setUid', (userId) => {
      localStorage.setItem('userId', userId)
      this.userId = localStorage.getItem('userId')
    })
    this.$on('setEvent', (eventKey) => {
      localStorage.setItem('eventKey', eventKey)
      this.userId = localStorage.getItem('eventKey')
    })
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
