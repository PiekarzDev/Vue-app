<template>
<panel title="Song Maindata">
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
          class="teal"
          @click="navigateTo({
            name: 'song-edit',
            params: {
              songId: song.id
            }
          })">
          Edit
        </v-btn>

        </v-flex>  

        <v-flex xs6>
          <img class="album-image" :src="song.albumImageUrl" />
          {{song.album}}
        </v-flex>
        
       </v-layout>   
      </panel>   
</template>

<script>

export default {
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  },
  props: [
    'song'
  ]
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

</style>