<template>
 <v-layout>
     <v-flex xs4 class="ml-5 mt-5">
    <panel title="Song Metadata">
      <v-text-field label="Title" v-model="song.title"
      required
      :rules="[required]"></v-text-field>

      <v-text-field label="Artist" v-model="song.artist"
      required
      :rules="[required]"></v-text-field>

      <v-text-field label="Genere" v-model="song.genere"
      required
      :rules="[required]"></v-text-field>

      <v-text-field label="Album" v-model="song.album"
      required
      :rules="[required]"></v-text-field>

      <v-text-field label="Album-Link" v-model="song.albumImageUrl"
      required
      :rules="[required]"></v-text-field>

      <v-text-field label="YouTube" v-model="song.ytId"
      required
      :rules="[required]"></v-text-field>
      
    </panel>
    </v-flex>
    
    <v-flex xs7 class="ml-5 mt-5">
    <panel title="Create SONG">
       <v-text-field label="Lyrices" v-model="song.lyrics" multi-line 
       required
      :rules="[required]"></v-text-field>

       <v-text-field label="Tab" v-model="song.tab" multi-line
       required
      :rules="[required]"></v-text-field>
    </panel>
    
        <v-btn
          round
          class="teal mt-5"
          @click="save">
          Edytuj/Zapisz
        </v-btn>
        <span class="error" v-if="error">
      {{error}}
    </span>
    </v-flex>
 </v-layout>
</template>

<script>

import SongsService from '@/services/SongsService'
export default {
  data () {
    return {
      song: {
        title: null,
        artist: null,
        genere: null,
        album: null,
        albumImageUrl: null,
        ytId: null,
        lyrics: null,
        tab: null
      },
      error: null,
      required: (value) => !!value || 'Wymagane!'
    }
  },
  methods: {
    async save () {
      this.error = null
      const areReqFieldsIn = Object
      .keys(this.song)
      .every(key => !!this.song[key])
      if (!areReqFieldsIn) {
        this.error = 'Wypełnij wymagane pola !'
        return
      }
      const songId = this.$store.state.route.params.songId
      try {
        await SongsService.put(this.song)
        this.$router.push({
          name: 'song',
          params: {
            songId: songId
          }
        })
      } catch (err) {
        console.log(err)
      }
    }
  },
  async mounted () {
    try {
      const songId = this.$store.state.route.params.songId
      this.song = (await SongsService.show(songId)).data
    } catch (err) {
      console.log(err)
    }
  }
}
</script>

<style scoped>
.error{
  display: block;
}
</style>
