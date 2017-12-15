<template>

 <v-layout column>
    <v-flex xs6 offset-xs3>
      <panel title="Login">
        <br>
        <input type="email" name="email" v-model="email" placeholder="Email">
        <br>
        <br>
        <input type="password" name="password" v-model="password" placeholder="Password">
        <br>
        <br>
        <div class="error" v-html="error" />
        <br>
        <v-btn
          round
          class="teal"
          @click="login">
          Login
        </v-btn>
        </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
import Panel from '@/components/Panel'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async login () {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  },
  components: {
    Panel
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

v-toolbar .flat{
  text-align: center;
}
.error {
  color: red;
}

.white{
  border-radius: 10px;
  
}
</style>
