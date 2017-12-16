<template>
<v-layout column>
    <v-flex xs6 offset-xs3>
      <panel title="Songs">
  
     
    <v-btn class="teal" @click="navigateTo({name:'song-create'})"
          slot="action"
          medium
          absolute
          right
          midle>
          <v-icon>add</v-icon>
      </v-btn>
 
      
    <div v-for="song in songs" :key="song.id">
      <v-layout>
        <v-flex xs6 left>
          <div class="song-title">
            {{song.title}}
          </div>
          <div class="song-artist">
            {{song.artist}}
          </div>
          <div class="song-genere">
            {{song.genere}}
          </div>

          <v-btn
          round
          class="teal mt-2"
          @click="navigateTo({name: 'song', params: {songId: song.id}})">
          Widok
        </v-btn>
        </v-flex>

        <v-flex xs6>
          <img class="album-image" :src="song.albumImageUrl" />
        </v-flex>
      </v-layout>
          
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
