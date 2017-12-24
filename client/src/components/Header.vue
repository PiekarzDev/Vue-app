<template>
    <v-toolbar fixed class="teal">
        <v-toolbar-title class="mr-4">
            <span class="home" @click="navigateTo({name: 'HelloWorld'})" >
                SongStore</span> </v-toolbar-title>
        <v-toolbar-items>
            <v-btn flat @click="navigateTo({name: 'songs'})">
                Browse
            </v-btn>
        </v-toolbar-items>

        <v-spacer></v-spacer>
        <v-toolbar-items>
            <v-btn  v-if="!$store.state.isUserLoggedIn"
             flat @click="navigateTo({name: 'login'})">
                LOG IN
            </v-btn>
            
            <v-btn  v-if="!$store.state.isUserLoggedIn"
             flat @click="navigateTo({name: 'register'})">
                SIGN UP
            </v-btn>
            <v-btn  v-if="$store.state.isUserLoggedIn"
             flat @click="logout">
                LOG OUT
            </v-btn>
            
        </v-toolbar-items>
    </v-toolbar>

</template>

<script>
export default {
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    },
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)

        // route to homepage
      this.$router.push({
        name: 'root'
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home{
    cursor:pointer;
}
</style>
