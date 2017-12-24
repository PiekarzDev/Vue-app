<template>
<v-layout column>
    <v-flex xs6 offset-xs3>
      <search-panel />
      <songs-panel />
     
    </v-flex>
  </v-layout>
</template>

<script>
import SearchPanel from '@/components/Songs/SearchPanel'
import SongsPanel from '@/components/Songs/SongsPanel'
import SongsService from '@/services/SongsService'
export default {
  components: {
    SongsPanel,
    SearchPanel
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
.left{
  padding: 5% 0%;
  border: 2px solid rgb(0, 150, 136);
  margin-top: 5px;
}

.song-title {
  font-size: 30px;
}
.song-artist {
  font-size: 25px;
}
.song-genere {
  font-size: 20px;
}

.album-image{
  width: 65%;
  margin: 0 auto;
}
</style>
