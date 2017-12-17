<template>
<div>
<v-layout>
    <v-flex xs6 ml-2 mt-3>
          <song-maindata :song="song" />  
         </v-flex>      

  <v-flex xs6 ml-2 mt-3>
    <lyrics :song="song"/>
  </v-flex>

<v-flex xs6 ml-2 mt-3 >
    <you-tube :ytId="song.ytId" />
  </v-flex>

  </v-layout>
  </div>
</template>

<script>
import YouTube from './YouTube'
import Lyrics from './Lyrics'
import SongMaindata from './SongMaindata'
import SongsService from '@/services/SongsService'
import Panel from '@/components/Panel'

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
    Panel,
    SongMaindata,
    YouTube,
    Lyrics
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
  width: 75%;
 
}


</style>