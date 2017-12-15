<template>
<v-layout column>
    <v-flex xs6 offset-xs3>
      <panel title="Songs">
  
     >
    <v-btn class="teal" @click="navigateTo({name:'song-create'})"
          slot="action"
          medium
          absolute
          right
          midle>
          <v-icon>add</v-icon>
      </v-btn>
 
      
        <div v-for="song in songs" :key="song.id">
          {{song.title}} -
          {{song.artist}} -
          {{song.album}} 
        </div>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import SongsService from '@/services/SongsService'
import Panel from '@/components/Panel'
export default {
  components: {
    Panel
  },
  data () {
    return {
      songs: null
    }
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  },
  async mounted () {
    // req to backend !
    this.songs = (await SongsService.index()).data
  }
}
</script>

<style scoped>
.white{
   border-radius: 10px;
}
</style>
