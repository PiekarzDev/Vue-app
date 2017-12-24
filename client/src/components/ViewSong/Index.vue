<template>
<div>
<v-layout>
        <v-flex xs6 ml-2 mt-3>
          <song-maindata :song="song" />  
        </v-flex>   

        <v-flex xs6 ml-2 mt-3>
          <lyrics :song="song"/>
        </v-flex>

  </v-layout>

  <v-layout>
    <v-flex class="yt" xs6 ml-2 mt-3 >
      <you-tube :ytId="song.ytId" />
    </v-flex>
    <v-flex xs6 ml-2 mt-3>
      <tab :song="song" />
    </v-flex>

  </v-layout>
  </div>
</template>

<script>
import Tab from './Tab'
import YouTube from './YouTube'
import Lyrics from './Lyrics'
import SongMaindata from './SongMaindata'
import SongsService from '@/services/SongsService'

export default {
  data () {
    return {
      song: {}
    }
  },

  async mounted () {
    const songId = this.$store.state.route.params.songId
    this.song = (await SongsService.show(songId)).data
  },
  components: {
    SongMaindata,
    YouTube,
    Lyrics,
    Tab
  }
}
</script>

<style scoped>

.left{
  font-size: 20px;
  margin: 5%;
}

.album-image{
  width: 85%;
  margin: 20px auto;
}

textarea{
  width: 80%;
 
}

.yt{
  overflow: hidden;
}

</style>