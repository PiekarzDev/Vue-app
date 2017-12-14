<template>

 <v-layout column>
    <v-flex xs6 offset-xs3>
      <div class="white elevation-8">
        <v-toolbar flat dense class="teal">
        <v-toolbar-title>Register</v-toolbar-title>
        </v-toolbar>
      
      <div class="pl-4 pr-4 pt-2 pb-2">
        <form name="tab-tracker-form" autocomplete="off">
        <br>
        <input type="email" name="email" v-model="email" placeholder="Email">
        <br>
        <br>
        <input type="password" name="password" v-model="password"
         placeholder="Password" autocomplete="new-password">
        <br>
        <br>
        <div class="error" v-html="error" />
        <br>
        <v-btn
          round
          class="teal"
          @click="register">
          Register
        </v-btn>
        </form>
      </div>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async register () {
      try {
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.token)
      } catch (error) {
        this.error = error.response.data.error
      }
    }
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
